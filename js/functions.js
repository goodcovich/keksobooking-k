
// Добавляет необходимое количество каких-то знаков перед числом до определенной длины
const myPadStart = (string, minLength, pad) => {
const actualPad = minLength - string.length;

if (actualPad <= 0) {
return string;
}

return pad.slice(0, actualPad % pad.length) + pad.repeat(actualPad / pad.length) + string;
}


// Генерирует рандомное число из заданного диапазона с количеством чисел после запятой (т.е. округляет до десятых/сотых и тп)
function getRandomNumber(from, to, decimalPlaces) {
  if (from < 0 || to < 0 || decimalPlaces < 0 || isNaN(from) || isNaN(to) || isNaN(decimalPlaces) || to < from) {
      return NaN; // Если аргументы неправильные, возвращаем NaN
  }

  let multiplier = Math.pow(10, decimalPlaces);
  let randomNum = Math.random() * (to - from) + from;
  return Math.round(randomNum * multiplier) / multiplier;
}

export {
  myPadStart,
  getRandomNumber,
}
