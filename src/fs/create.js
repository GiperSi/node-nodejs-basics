import fs from 'fs/promises';

const create = async () => {
  const filePath = 'files/fresh.txt';

  try {
    await fs.access(filePath);
    throw new Error('FS operation failed');
  } catch (error) {
    if (error.code === 'ENOENT') {
      await fs.writeFile(filePath, 'I am fresh and young');
      console.log('File created successfully.');
    } else {
      throw error;
    }
  }
};

await create();
