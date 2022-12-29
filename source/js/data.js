import { getRandomInteger, getRandomNumber } from './utils';

const titles = ['Стандартные апартаменты', 'Уютный модерн', 'Классика в новом прочтении', 'Только роскошь', 'Евро-стандарт', 'Хай-тек'];

const TYPE_FLAT = ['Дворец', 'Квартира', 'Дом', 'Бунгало'];

const CHECK_TYPE = ['12:00', '13:00', '14:00'];

const DESCRIPTIONS = ['Уютный и тёплый интерьер', 'Современное удобство', 'Всё для вашего отдыха', 'Почувствуйте себя на новом уровне', 'Спокойствие в каждом мгновении'];

const FEATURES_TYPE = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

const createFeatures = () => {
  const features = [];
  for (let i = 0; i < getRandomInteger(1, 6); i++) {
    features.push(FEATURES_TYPE[i]);
  }
  return features;
};

const createPhotos = () => {
  const photos = [];
  for (let i = 0; i < getRandomInteger(1, 3); i++) {
    photos.push(PHOTOS[i]);
  }
  return photos;
};

const createOffers = (OFFER_COUNT) => {
  const offers = [];
  for (let i = 0; i < OFFER_COUNT; i++) {
    offers.push({
      author: {
        avatar: 'img/avatars/user0' + getRandomInteger(0, 10) + '.png',
      },
      offer: {
        title: titles[getRandomInteger(0, 5)],
        address: '{location.x}, {location.y}',
        price: getRandomInteger(0, 1000000),
        type: TYPE_FLAT[getRandomInteger(0, 3)],
        rooms: getRandomInteger(1, 3),
        guests: getRandomInteger(1, 6),
        checkin: CHECK_TYPE[getRandomInteger(0, 2)],
        checkout: CHECK_TYPE[getRandomInteger(0, 2)],
        features: createFeatures(),
        description: DESCRIPTIONS[getRandomInteger(0, 4)],
        photos: createPhotos(),
      },
      location: {
        x: getRandomNumber(35.65000, 35.70000, 5),
        y: getRandomNumber(139.70000, 139.80000, 5),
      },
    })
  }
  return offers;
};

export {createOffers};
