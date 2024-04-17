// Добавляет необходимое количество каких-то знаков перед числом до определенной длины
const myPadStart = (string, minLength, pad) => {
  const actualPad = minLength - string.length;

  if (actualPad <= 0) {
  return string;
  }

  return pad.slice(0, actualPad % pad.length) + pad.repeat(actualPad / pad.length) + string;
  }


  // Генерирует рандомное число из заданного диапазона с количеством чисел после запятой (т.е. округляет до десятых/сотых и тп)
  function getRandomNumber(from, to, decimalPlaces=0) {
    if (from < 0 || to < 0 || decimalPlaces < 0 || isNaN(from) || isNaN(to) || isNaN(decimalPlaces) || to < from) {
        return NaN; // Если аргументы неправильные, возвращаем NaN
    }

    let multiplier = Math.pow(10, decimalPlaces);
    let randomNum = Math.random() * (to - from) + from;
    return Math.round(randomNum * multiplier) / multiplier;
  }

  // Возвращает рандомное число от 1 до 11 и приводит его к строке
  function getSimpleNumber() {
    return myPadStart(getRandomNumber(1,11).toString(),2,"0")

  }

  // Возвращает рандомный индекс элемента массива
function getRandomArrayItem(array) {

return array[getRandomNumber(0,array.length-1)]
}

  const offerTitles = ["Сдам уютную квартиру", "Сдам комнату славянам-котам", "Апартаменты на высоте для бенгалов", "Теплая лежанка сдается", "Сдам коробку от холодильника",]



 const typeOfHouse = ["palace", "flat", "house", "bungalow", "hotel"]

 const checkinCheckoutTime = ["12:00", "13:00","14:00"]

 const features = ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"]

 function getArray(features) {
  const maxLength = features.length;
  const lengthOfArray = getRandomNumber(1, maxLength);
  const array = [];

  for(var i = 0;i < lengthOfArray;i++) {
    const indexOfEl = getRandomNumber(0, 5);
    const el = features[indexOfEl];

    if (!array.includes(el)) {
      array.push(el);
    }
  }
  return array;
}

const photos = [
"https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg",
"https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg",
"https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg"
]



function generateData() {
  const location = {
    lat: getRandomNumber(35.65000,35.70000,5),
    lng: getRandomNumber(139.70000,139.80000,5),
    }

  return {
    author: {
      avatar: `img/avatars/user${getSimpleNumber()}.png`,

    },
    offer: {
title: getRandomArrayItem(offerTitles),
address: `${location.lat}, ${location.lng}`

    },
    price: {
      price: getRandomNumber(1,1000000)
    },
    type: {
      type: getRandomArrayItem(typeOfHouse)
    },
    rooms: {
      rooms: getRandomNumber(1,5),
    },
    guests: {
      guests: getRandomNumber (1,5),
    },
    checkin: {
      checkin: getRandomArrayItem(checkinCheckoutTime)
    },
    checkout: {
      checkout: getRandomArrayItem(checkinCheckoutTime)
    },
    features: {
      features: `${getArray(features)}`
    },
    photos: {
      photos: getRandomArrayItem(photos)
    },
    location: location,

  }
}


console.log("данные1", generateData());
console.log("данные2", generateData());
console.log("данные3", generateData());

