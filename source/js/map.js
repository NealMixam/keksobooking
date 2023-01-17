/* eslint-disable no-unused-vars */
import { form } from './form';
let formElements = form.querySelectorAll('fieldset');
const addressInput = form.querySelector('#address');
const filtersForm = document.querySelector('.map__filters');
let filtersFormElements = filtersForm.children;
import '../../leaflet/leaflet/leaflet';
import { createOffers } from '../js/data';
import {createPopup} from '../js/popup';
import { showErrorLoadMessage } from './utils';

const activeState = () => {
  window.addEventListener('load', () => {
    formElements.forEach(element => element.removeAttribute('disabled'));
    form.classList.remove('ad-form--disabled');
    for (let i = 0; i <= filtersFormElements.length - 1; i++) {
      filtersFormElements.item(i).removeAttribute('disabled');
    }
    filtersForm.classList.remove('map__filters--disabled');
    addressInput.value = '35.6895, 139.692';
  });
}

window.addEventListener('load', () => {
  formElements.forEach(element => element.setAttribute('disabled', ''));
  form.classList.add('ad-form--disabled');
  for (let i = 0; i <= filtersFormElements.length - 1; i++) {
    filtersFormElements.item(i).setAttribute('disabled', '');
  }
  filtersForm.classList.add('map__filters--disabled');
});

// eslint-disable-next-line no-undef

// eslint-disable-next-line no-undef
const map = L.map('map-canvas')
  .on('load', () => {
    activeState();
  })
  .setView({
    lat: 35.6895,
    lng: 139.692,
  }, 10);

// eslint-disable-next-line no-undef
L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
// eslint-disable-next-line no-undef
).addTo(map);

// eslint-disable-next-line no-undef
const pinIcon = L.icon(
  {
    iconUrl: 'img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  },
);

// eslint-disable-next-line no-undef
const marker = L.marker(
  {
    lat: 35.6895,
    lng: 139.692,
  },
  {
    draggable: true,
    icon: pinIcon,
  },
);

marker.addTo(map);

marker.on('moveend', (evt) => {
  let latitude = evt.target.getLatLng().lat;
  let longitude = evt.target.getLatLng().lng;
  addressInput.value = `${latitude}, ${longitude}`;
});

// let offers = createOffers(10);
// // eslint-disable-next-line no-console
// console.log(offers);

const renderCards = (offers) => {
  offers.forEach((card) => {
    const {author, offer, location} = card;
    let lat = location.lat;
    let lng = location.lng;
    // eslint-disable-next-line no-undef
    const icon = L.icon({
      iconUrl: 'img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    // eslint-disable-next-line no-undef
    const standartMarker = L.marker(
      {
        lat,
        lng,
      },
      {
        icon,
      },
    );

    standartMarker.addTo(map)
      .bindPopup(createPopup(card));
  });

  showErrorLoadMessage('Что-то пошло не так');
};

export {renderCards, addressInput};
