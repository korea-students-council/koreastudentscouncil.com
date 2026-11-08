import { readdir, readFile } from 'fs/promises';
import path from 'path';

export type KSCEvent = { id: number; title: string; content: string; imageUrl: string };

// /admin 에서 등록한 대표 행사는 public/database 에 '<행사명>.txt' 와 '<행사명>-<uuid>.<확장자>' 로 저장됩니다.
export const getEvents = async (): Promise<KSCEvent[]> => {
  const dirPath = path.join(process.cwd(), 'public', 'database');
  const files = await readdir(dirPath);

  const txtFiles = files.filter((file) => file.endsWith('.txt'));
  const imageFiles = files.filter((file) => !file.endsWith('.txt'));

  const result = await Promise.all(
    txtFiles.map(async (file) => {
      const title = file.replace('.txt', '');
      const content = await readFile(path.join(dirPath, file), 'utf8');

      return {
        title,
        content,
        imageUrl: `/api/image/${imageFiles.find((item) => item.includes(`${title}-`))}`,
      };
    }),
  );

  return result.map((res, idx) => ({ ...res, id: idx + 1 }));
};

// 저장된 설명은 첫 줄이 '[부제]' 형식이라 화면에서는 부제와 본문을 나눠서 씁니다.
export const splitEventContent = (content: string) => {
  const lines = content.replaceAll('\\n', '\n').trim().split('\n');
  const first = lines[0]?.trim() ?? '';
  if (first.startsWith('[') && first.endsWith(']')) {
    return { tagline: first.slice(1, -1), body: lines.slice(1).join('\n').trim() };
  }
  return { tagline: '', body: lines.join('\n').trim() };
};
