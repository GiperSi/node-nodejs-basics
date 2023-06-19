import fs from 'fs';

const rename = async () => {
  const sourceFile = 'files/wrongFilename.txt';
  const destinationFile = 'files/properFilename.md';

  try {
    await fs.promises.access(sourceFile);
    await fs.promises.access(destinationFile);
    throw new Error('FS operation failed');
  } catch (error) {
    if (error.code === 'ENOENT') {
      if (error.path === sourceFile) {
        throw new Error('FS operation failed');
      }

      await fs.promises.rename(sourceFile, destinationFile);
      console.log('File renamed successfully.');
    } else {
      throw error;
    }
  }
};

await rename();
