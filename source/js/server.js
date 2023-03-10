import { renderCards } from './map';
import { showSuccessMessage, submitForm } from './form';
import { selectHouseType } from './filters-form';

fetch('https://23.javascript.pages.academy/keksobooking/data').then((response) => response.json())
  .then((offers) => {
    // eslint-disable-next-line no-console
    console.log(offers);
    renderCards(offers);
    // selectHouseType(() => renderCards(offers));
  });
submitForm(showSuccessMessage);
