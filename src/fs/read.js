import fs from 'fs';

const read = async () => {
  const fileToRead = 'files/fileToRead.txt';

  try {
    await fs.promises.access(fileToRead);
    const content = await fs.promises.readFile(fileToRead, 'utf-8');
    console.log(content);
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error('FS operation failed');
    } else {
      throw error;
    }
  }
};

await read();
