import { readdir } from 'node:fs/promises';
import path from 'node:path';

const list = async () => {
  try {
    const folderPath = path.resolve('files');

    const files = await readdir(folderPath);

    console.log(files);
  } catch {
    throw new Error('FS operation failed');
  }
};

await list();
