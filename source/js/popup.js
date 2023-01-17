/* eslint-disable no-undef */

// eslint-disable-next-line no-unused-vars
const createPopup = (
  {
    author: {avatar},
    offer:{
      title,
      address,
      price,
      type,
      rooms,
      guests,
      checkin,
      checkout,
      features,
      description,
      photos,
    },
  }) => {
  const offerTemplate = document.querySelector('#card').content.querySelector('.popup');
  const offerElement = offerTemplate.cloneNode(true);

  offerElement.querySelector('.popup__title').textContent = title;
  offerElement.querySelector('.popup__text--address').textContent = address;
  offerElement.querySelector('.popup__text--price').textContent = price + ' ₽/ночь';
  offerElement.querySelector('.popup__type').textContent = type;
  offerElement.querySelector('.popup__text--capacity').textContent = `${rooms} комнаты для ${guests} гостей`;
  offerElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + checkin + ', выезд до ' + checkout;
  offerElement.querySelector('.popup__features').textContent = features;
  offerElement.querySelector('.popup__description').textContent = description;
  offerElement.querySelector('.popup__avatar').src = avatar;

  const photosContainer = offerElement.querySelector('.popup__photos');
  const photoElement = photosContainer.querySelector('.popup__photo');

  for (let i = 0; i < photos.length - 1; i++) {
    // eslint-disable-next-line no-undef
    photoElement.src = photos[i];
    const photoNewElement = photoElement.cloneNode(true);
    photosContainer.appendChild(photoNewElement);
  }

  // offersListFragment.appendChild(offerElement);
  // offersContainer.appendChild(offersListFragment);
  return offerElement;
};

export {createPopup};
