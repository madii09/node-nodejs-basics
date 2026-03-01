import { readFile } from 'node:fs/promises';
import path from 'node:path';

const read = async () => {
  try {
    const filePath = path.resolve('files', 'fileToRead.txt');

    const content = await readFile(filePath, 'utf-8');

    console.log(content);
  } catch {
    throw new Error('FS operation failed');
  }
};

await read();
