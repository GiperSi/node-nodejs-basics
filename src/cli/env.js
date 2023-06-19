const parseEnv = () => {
  // Получаем все переменные окружения
  const envVariables = process.env;
  
  // Фильтруем переменные, начинающиеся с префикса "RSS_"
  const rssVariables = Object.keys(envVariables)
    .filter(key => key.startsWith("RSS_"))
    .reduce((filteredEnv, key) => {
      filteredEnv[key] = envVariables[key];
      return filteredEnv;
    }, {});

  // Формируем строку вида "RSS_name1=value1; RSS_name2=value2"
  const envString = Object.entries(rssVariables)
    .map(([key, value]) => `${key}=${value}`)
    .join("; ");

  // Выводим полученную строку на консоль
  console.log(envString);
};

parseEnv();
