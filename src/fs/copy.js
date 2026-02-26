import { cp } from 'node:fs/promises';
import path from 'node:path';

const copy = async () => {
  try {
    const src = path.resolve('files');
    const dest = path.resolve('files_copy');

    await cp(src, dest, {
      recursive: true,
      errorOnExist: true,
      force: false,
    });
  } catch {
    throw new Error('FS operation failed');
  }
};

await copy();
