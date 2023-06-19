const { spawn } = require('child_process');

const spawnChildProcess = async (args) => {
  const childProcess = spawn('node', ['script.js', ...args], {
    stdio: ['pipe', 'pipe', 'inherit']
  });

  process.stdin.pipe(childProcess.stdin);

  childProcess.stdout.on('data', (data) => {
    process.stdout.write(data);
  });

  childProcess.on('exit', (code) => {
    console.log(`Child process exited with code ${code}`);
  });
};

await spawnChildProcess(['someArgument1', 'someArgument2']);

