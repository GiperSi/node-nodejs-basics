const fs = require('fs');
const create = async () => {
    const filePath = 'files/fresh.txt';
    
    try {
        await fs.promises.access(filePath);
        throw new Error('FS oper fail..');
    } catch (error) {
        if (error.code === 'ENOENT') {
            await fs.promises.writeFile(filePath, 'I am fresh and young');
            console.log('File created +');
        } else {
            throw error;
        }
    }
};

await create();
