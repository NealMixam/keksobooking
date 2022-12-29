import {createOffers} from './data';

const offerElements = createOffers(1);
const offersContainer = document.querySelector('#map-canvas');
const offerTemplate = document.querySelector('#card').content.querySelector('.popup');

const offersListFragment = document.createDocumentFragment();

offerElements.forEach(({author: {avatar}, offer: {title, address, price, type, rooms, guests, checkin, checkout, features, description, photos}}) => {
  const offerElement = offerTemplate.cloneNode(true);

  offerElement.querySelector('.popup__title').textContent = title;
  offerElement.querySelector('.popup__text--address').textContent = address;
  offerElement.querySelector('.popup__text--price').textContent = price + ' ₽/ночь';
  offerElement.querySelector('.popup__type').textContent = type;
  offerElement.querySelector('.popup__text--capacity').textContent = rooms + ' комнаты для ' + guests + ' гостей';
  offerElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + checkin + ', выезд до ' + checkout;
  offerElement.querySelector('.popup__features').textContent = features;
  offerElement.querySelector('.popup__description').textContent = description;
  offerElement.querySelector('.popup__avatar').src = avatar;

  const photosContainer = offerElement.querySelector('.popup__photos');
  const photoElement = photosContainer.querySelector('.popup__photo');

  for (let i = 0; i < photos.length; i++) {
    photoElement.src = photos[i];
    const photoNewElement = photoElement.cloneNode(true);
    photosContainer.appendChild(photoNewElement);
  }

  offersListFragment.appendChild(offerElement);
});

offersContainer.appendChild(offersListFragment);
