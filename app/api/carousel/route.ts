import { readdir, readFile, writeFile } from 'fs/promises';
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get('file') as File;
  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const password = formData.get('password');

  if (password !== process.env.NEXT_PUBLIC_ADMIN_PASSWORD)
    return NextResponse.json({ status: 403, data: 'Forbidden' });
  if (!file) return NextResponse.json({ status: 400, data: 'No files received' });

  const buffer = Buffer.from(await file.arrayBuffer());
  try {
    const pathname = path.join(process.cwd(), 'public/database/' + title);
    const filename = `${Date.now()}_${encodeURI(file.name)}`;

    const url = path.join('/database/' + title);
    await writeFile(`${pathname}-${filename}`, buffer);
    await writeFile(`${pathname}.txt`, description, 'utf8');
    return NextResponse.json({
      status: 201,
      url: `/api/image${`${url}-${filename}`.replaceAll('\\', '/').replaceAll('/database', '')}`,
    });
  } catch (error) {
    return NextResponse.json({ status: 500, data: error });
  }
}

export async function GET() {
  const dirPath = path.join(process.cwd(), 'public', 'database');

  const files = await readdir(dirPath);

  const txtFiles = files.filter((file) => file.endsWith('.txt'));
  const imageFiles = files.filter((file) => !file.endsWith('.txt'));

  const result = await Promise.all(
    txtFiles.map(async (file) => {
      const filePath = path.join(dirPath, file);
      const content = await readFile(filePath, 'utf8');

      return {
        title: file.replace('.txt', ''),
        content,
        imageUrl: `/api/image/${imageFiles.find((item) =>
          item.includes(`${file.replace('.txt', '')}-`),
        )}`,
      };
    }),
  );

  return NextResponse.json({
    status: 200,
    data: result.map((res, idx) => ({ ...res, id: idx + 1 })),
  });
}
