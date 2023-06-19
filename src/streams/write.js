import { createWriteStream } from 'fs';

const write = async () => {
  const filePath = 'files\\fileToWrite.txt';

  const writeStream = createWriteStream(filePath, { flags: 'a' });

  process.stdin.pipe(writeStream);

  writeStream.on('error', (error) => {
    console.error(`Error writing to file: ${error.message}`);
  });

  writeStream.on('finish', () => {
    console.log('Data written to file');
  });
};

await write();
