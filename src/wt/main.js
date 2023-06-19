const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

const performCalculations = async () => {
  if (isMainThread) {
    const cpuCount = require('os').cpus().length;
    const results = [];

    for (let i = 0; i < cpuCount; i++) {
      const worker = new Worker('./worker.js', { workerData: i + 10 });

      worker.on('message', (result) => {
        results.push({ status: 'resolved', data: result });

        if (results.length === cpuCount) {
          console.log(results);
        }
      });

      worker.on('error', (error) => {
        results.push({ status: 'error', data: null });

        if (results.length === cpuCount) {
          console.log(results);
        }
      });
    }
  }
};

await performCalculations();
