import { PHOTOS, generateData } from "./data";
import { checkDataOfElement, getGuestsCounter, getRoomsOffer, getTypeOfHouse, removeNode,checkDataOfPhotos } from "./util";

function createCardTemplate() {
  const data = generateData();

  const mapCanvas = document.querySelector(".map__canvas");

  const templateFragment = document.querySelector("#card").content; // Находим фрагмент с содержимым темплейта

  const template = templateFragment.querySelector("article"); // В фрагменте находим нужный элемент

  const fragment = document.createDocumentFragment();

  const element = template.cloneNode(true); // Клонируем элемент со всеми "внутренностями"

  // element.querySelector(".popup__title").textContent = data.offer.title;
  const description = element.querySelector(".popup__description");
  const title = element.querySelector(".popup__title");
  const avatar = element.querySelector(".popup__avatar");
  const price = element.querySelector(".popup__text--price");
  const photoContainer = element.querySelector(".popup__photos");

  element.querySelector(".popup__text--address").textContent =
    data.offer.address;

  // element.querySelector(".popup__text--price").textContent =
  //   data.offer.price + " ₽/ночь";


  element.querySelector(".popup__type").textContent = getTypeOfHouse(data.offer.type);

  element.querySelector(".popup__text--capacity").textContent = getRoomsOffer(data.offer.rooms) + getGuestsCounter(data.offer.guests);

  element.querySelector(".popup__text--time").textContent = "Заезд после " + data.offer.checkin + ", выезд до " + data.offer.checkout

  element.querySelector(".popup__features").textContent = data.offer.features;

  // element.querySelector(".popup__description").textContent = data.offer.description

  element.querySelector(".popup__photos").src = data.offer.photos;

  checkDataOfElement(title, data.offer.title);
checkDataOfElement(description, data.offer.description);
const priceData = data.offer.price + " ₽/ночь";
checkDataOfElement(price, priceData);
checkDataOfElement(avatar, data.author.avatar,"src");
// Удаляем узел img из темплейта
removeNode(photoContainer.querySelector(".popup__photo"));
checkDataOfPhotos(photoContainer,data.offer.photos)


// разобраться с фичами, исправить описание обьявлений в массиве decription,

  // for (let i = 0; i < PHOTOS.length; i++) {
  //   const img = document.createElement('img');
  //   img.src = images[i];
// }


  console.log(element);

  fragment.appendChild(element);

  mapCanvas.appendChild(fragment);

  console.log(data);
}

export { createCardTemplate };
