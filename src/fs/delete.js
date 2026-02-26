import { rm, access } from 'node:fs/promises';
import path from 'node:path';

const remove = async () => {
  try {
    const filePath = path.resolve('files', 'fileToRemove.txt');

    await access(filePath);

    await rm(filePath);
  } catch {
    throw new Error('FS operation failed');
  }
};

await remove();
