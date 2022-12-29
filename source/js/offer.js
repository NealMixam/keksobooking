import {offers} from './data';

const offerElements = offers;
const offersContainer = document.querySelector('#map-canvas');
const offerTemplate = document.querySelector('#card').content.querySelector('.popup');

offerElements.forEach(() => {
  const offerElement = offerTemplate.cloneNode(true);
  offersContainer.appendChild(offerElement);
});




