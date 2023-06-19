const { workerData, parentPort } = require('worker_threads');

const nthFibonacci = (n) => (n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2));

const result = nthFibonacci(workerData);

parentPort.postMessage(result);
