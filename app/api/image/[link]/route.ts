import console from 'console';
import fs from 'fs';
import { NextRequest } from 'next/server';
import path from 'path';

export async function GET(req: NextRequest) {
  const link = decodeURIComponent(req.nextUrl.pathname.replace('/api/image/', ''));
  console.log(link);
  const filePath = path.join(process.cwd(), 'public/database', link);
  console.log(filePath);

  if (!fs.existsSync(filePath)) {
    return new Response(JSON.stringify({ error: 'Image not found' }), {
      status: 404,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  const fileBuffer = fs.readFileSync(filePath);
  return new Response(fileBuffer, {
    status: 200,
    headers: {
      'Content-Type': 'image/jpeg', // Adjust content type as needed
    },
  });
}
