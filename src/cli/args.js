const parseArgs = () => {
  // Получаем аргументы командной строки
  const args = process.argv.slice(2);

  // Формируем объект с аргументами и их значениями
  const argObj = {};
  for (let i = 0; i < args.length; i += 2) {
    const argName = args[i].replace(/^--/, "");
    const argValue = args[i + 1];
    argObj[argName] = argValue;
  }

  // Выводим аргументы и их значения на консоль
  Object.entries(argObj).forEach(([argName, argValue]) => {
    console.log(`${argName} is ${argValue}`);
  });
};

parseArgs();
