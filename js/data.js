import {getRandomNumber, getSimpleNumber,getRandomArrayItem,getElementsFromArray} from './util.js';

const OFFER_TITLES = [
  "Сдам уютную квартиру",
  "Сдам комнату славянам-котам",
  "Апартаменты на высоте для бенгалов",
  "Теплая лежанка сдается",
  "Сдам коробку от холодильника",
];

const TYPE_OF_HOUSE = ["palace", "flat", "house", "bungalow", "hotel"];

const CHECKIN_CHECKOUT_TIME = ["12:00", "13:00", "14:00"];

const FEATURES = [
  "wifi",
  "dishwasher",
  "parking",
  "washer",
  "elevator",
  "conditioner",
];
const PHOTOS = [
  "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg",
  "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg",
  "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg",
];

const DESCRIPTION = [
  "RFGHBGEVF",
  "TEGRV",
  "ERTGHYUJ"
];

function convertToMinutes(time) {
  // let [hours, minutes] = time.split(":").map(Number);
  const collback = (item,index)=>{
    console.log(item);
    console.log(index);
    return Number(item)
  }

  let timeStrArr = time.split(":");
  console.log(timeStrArr);
  const timeNumberArr = timeStrArr.map((item)=>{
    return Number(item)
  });
  console.log(timeNumberArr)
  const [hours] = [8, 0];
  console.log('hours',hours);
  const minutes = timeNumberArr[0];
  console.log(minutes);
  return hours * 60 + minutes;
}



function generateData() {
  const location = {
    lat: getRandomNumber(35.65, 35.7, 5),
    lng: getRandomNumber(139.7, 139.8, 5),
  };

  return {
    author: {
      avatar: `img/avatars/user${getSimpleNumber()}.png`,
    },
    offer: {
      title: getRandomArrayItem(OFFER_TITLES),
      address: `${location.lat}, ${location.lng}`,
      price: getRandomNumber(1, 100000),
      type: getRandomArrayItem(TYPE_OF_HOUSE),
      rooms: getRandomNumber(1, 5),
      guests: getRandomNumber(1, 5),
      checkin: getRandomArrayItem(CHECKIN_CHECKOUT_TIME),
      checkout: getRandomArrayItem(CHECKIN_CHECKOUT_TIME),
      features: getElementsFromArray(FEATURES),
      description: getRandomArrayItem(DESCRIPTION),
      photos: getElementsFromArray(PHOTOS),
    },
    location: location,
  };
}

export {generateData, PHOTOS};
