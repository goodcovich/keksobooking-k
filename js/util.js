// Добавляет необходимое количество каких-то знаков перед числом до определенной длины
const myPadStart = (string, minLength, pad) => {
  const actualPad = minLength - string.length;

  if (actualPad <= 0) {
    return string;
  }

  return (
    pad.slice(0, actualPad % pad.length) +
    pad.repeat(actualPad / pad.length) +
    string
  );
};

// Генерирует рандомное число из заданного диапазона с количеством чисел после запятой (т.е. округляет до десятых/сотых и тп)
function getRandomNumber(from, to, decimalPlaces = 0) {
  if (
    from < 0 ||
    to < 0 ||
    decimalPlaces < 0 ||
    isNaN(from) ||
    isNaN(to) ||
    isNaN(decimalPlaces) ||
    to < from
  ) {
    return NaN; // Если аргументы неправильные, возвращаем NaN
  }

  let multiplier = Math.pow(10, decimalPlaces);
  let randomNum = Math.random() * (to - from) + from;

  return Math.round(randomNum * multiplier) / multiplier;
}

// Возвращает рандомное число от 1 до 11 и приводит его к строке
function getSimpleNumber() {
  return myPadStart(getRandomNumber(1, 11).toString(), 2, "0");
}

// Возвращает рандомный индекс элемента массива
function getRandomArrayItem(array) {
  return array[getRandomNumber(0, array.length - 1)];
}


function getElementsFromArray(elements) {
  const maxLength = elements.length;
  const lengthOfArray = getRandomNumber(1, maxLength);
  const array = [];

  for (let i = 0; i < lengthOfArray; i++) {
    const el = getRandomArrayItem(elements);

    if (!array.includes(el)) {
      array.push(el);
    }
  }

  return array;
}
function getTypeOfHouse(type) {
  switch (type) {
    case "flat":
      return "Квартира";
    case "bungalow":
      return "Бунгало";
    case "house":
      return "Дом";
    case "palace":
      return "Дворец";
    case "hotel":
      return "Отель";
  }
}

function getRoomsOffer(roomCounter) {
switch(roomCounter) {
case 1:
  return `${roomCounter} комната`;
case 2, 3, 4:
  return `${roomCounter} комнаты`;
  default:
    return `${roomCounter} комнат`;

}
}

function getGuestsCounter(guestsCounter) {
  switch(guestsCounter) {
  case 1:
    return ` для ${guestsCounter} гостя`;
      default:
      return " для " + guestsCounter + " гостей";

  }
  }

function removeNode(element) {
  element.remove()
}

function fillInnElement(element,data,property){
  element[property] = data;
}

function checkDataOfElement(node,data, property="textContent") {
if (data) {
  fillInnElement(node,data,property);
} else {
  removeNode(node);
}
}

function checkDataOfPhotos(node,photos) {
  if (photos.length > 0) {
      photos.forEach((item,index) => {
        node.insertAdjacentHTML('beforeend', `<img src=${item} class="popup__photo" width="45" height="40" alt="Фотография жилья">`);
      });
  } else {
    removeNode(node);
  }
  }

export {getRandomNumber,getRandomArrayItem,getElementsFromArray,getSimpleNumber,getTypeOfHouse,getRoomsOffer,checkDataOfElement,getGuestsCounter,removeNode,checkDataOfPhotos};
