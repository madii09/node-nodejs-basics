import { rename as fsRename, access } from 'node:fs/promises';
import path from 'node:path';

const rename = async () => {
  try {
    const srcPath = path.resolve('files', 'wrongFilename.txt');
    const destPath = path.resolve('files', 'properFilename.md');

    await access(srcPath);

    try {
      await access(destPath);
      throw new Error();
    } catch {}

    await fsRename(srcPath, destPath);
  } catch {
    throw new Error('FS operation failed');
  }
};

await rename();
