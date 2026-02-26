import { writeFile } from 'node:fs/promises';
import path from 'node:path';

const create = async () => {
  try {
    const filePath = path.resolve('files', 'fresh.txt');

    await writeFile(filePath, 'I am fresh and young', { flag: 'wx' });
  } catch {
    throw new Error('FS operation failed');
  }
};

await create();
