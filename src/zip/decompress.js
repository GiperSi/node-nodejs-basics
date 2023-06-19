import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';

const decompress = async () => {
  const compressedFilePath = 'files\\archive.gz';
  const decompressedFilePath = 'files\\fileToCompress.txt';

  const readStream = createReadStream(compressedFilePath);
  const writeStream = createWriteStream(decompressedFilePath);
  const gunzipStream = createGunzip();

  readStream.pipe(gunzipStream).pipe(writeStream);

  writeStream.on('finish', () => {
    console.log('File decompressed');
  });

  writeStream.on('error', (error) => {
    console.error(`Error decompressing file: ${error.message}`);
  });
};

await decompress();
