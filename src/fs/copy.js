import fs from 'fs';

const copy = async () => {
  const sourceDir = 'files';
  const destinationDir = 'files_copy';

  try {
    await fs.promises.access(sourceDir);
    await fs.promises.access(destinationDir);
    throw new Error('FS operation failed');
  } catch (error) {
    if (error.code === 'ENOENT') {    
      if (error.path === sourceDir || error.path === destinationDir) {
        throw new Error('FS operation failed');
      }

      await fs.promises.mkdir(destinationDir);

      const files = await fs.promises.readdir(sourceDir);

      for (const file of files) {
        const sourcePath = `${sourceDir}/${file}`;
        const destinationPath = `${destinationDir}/${file}`;

        const fileStats = await fs.promises.stat(sourcePath);
        if (fileStats.isFile()) {
          const fileData = await fs.promises.readFile(sourcePath);
          await fs.promises.writeFile(destinationPath, fileData);
        }
      }

      console.log('Folder copied successfully.');
    } else {
      throw error;
    }
  }
};

await copy();
