import fs from 'fs';

const list = async () => {
  const folder = 'files';

  try {
    await fs.promises.access(folder);
    const files = await fs.promises.readdir(folder);
    console.log(files);
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error('FS operation failed');
    } else {
      throw error;
    }
  }
};

await list();
