import fs from 'fs';

const remove = async () => {
  const fileToRemove = 'files/fileToRemove.txt';

  try {
    await fs.promises.access(fileToRemove);
    await fs.promises.unlink(fileToRemove);
    console.log('File removed successfully.');
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error('FS operation failed');
    } else {
      throw error;
    }
  }
};

await remove();
