import { createReadStream } from 'fs';

const read = async () => {
  const filePath = 'files\\fileToRead.txt';

  const readStream = createReadStream(filePath, { encoding: 'utf8' });

  readStream.on('data', (chunk) => {
    process.stdout.write(chunk);
  });

  readStream.on('error', (error) => {
    console.error(`Error reading file: ${error.message}`);
  });

  readStream.on('end', () => {
    console.log('File read complete');
  });
};

await read();
