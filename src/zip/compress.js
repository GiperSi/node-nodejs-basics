import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';

const compress = async () => {
  const sourceFilePath = 'files\\fileToCompress.txt';
  const compressedFilePath = 'files\\archive.gz';

  const readStream = createReadStream(sourceFilePath);
  const writeStream = createWriteStream(compressedFilePath);
  const gzipStream = createGzip();

  readStream.pipe(gzipStream).pipe(writeStream);

  writeStream.on('finish', () => {
    console.log('File compressed');
  });

  writeStream.on('error', (error) => {
    console.error(`Error compressing file: ${error.message}`);
  });
};

await compress();
