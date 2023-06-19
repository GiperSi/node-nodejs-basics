import { createHash } from 'crypto';
import { readFile } from 'fs/promises';

const calculateHash = async () => {
  const filePath = 'files\\fileToCalculateHashFor.txt';

  try {
    const fileData = await readFile(filePath);
    const hash = createHash('sha256').update(fileData).digest('hex');
    console.log(hash);
  } catch (error) {
    console.error(`Error calculating hash for file: ${error.message}`);
  }
};

await calculateHash();
