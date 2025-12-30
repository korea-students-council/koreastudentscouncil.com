import { readdir, unlink } from 'fs/promises';
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';

export async function DELETE(req: NextRequest) {
  const title = decodeURIComponent(req.nextUrl.pathname.replace('/api/carousel/', ''));

  const dirPath = path.join(process.cwd(), 'public', 'database');

  const files = await readdir(dirPath);

  const txtFiles = files.filter((file) => file.endsWith('.txt'));
  const imageFiles = files.filter((file) => !file.endsWith('.txt'));

  console.log(txtFiles.find((item) => item.includes(title))!);
  try {
    await unlink(`${dirPath}/${txtFiles.find((item) => item.includes(title))!}`);
    await unlink(`${dirPath}/${imageFiles.find((item) => item.includes(title))!}`);
  } catch (err) {
    return NextResponse.json({ status: 500, data: err });
  }

  return NextResponse.json({ status: 200 });
}
