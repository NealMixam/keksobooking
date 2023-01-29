import { isEscEvent } from './utils';
const bodyContainer = document.querySelector('body');
const form = document.querySelector('.ad-form');
const inputType = form.querySelector('#type');
const inputPrice = form.querySelector('#price');
const timeIn = form.querySelector('#timein');
const timeOut = form.querySelector('#timeout');
const inputRoomsCount = form.querySelector('#room_number');
const inputGuestsCount = form.querySelector('#capacity');
const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const successMessage = successMessageTemplate.cloneNode(true);
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const errorMessage = errorMessageTemplate.cloneNode(true);
const errorMessageCloseElement = errorMessage.querySelector('.error__button');

const onSuccessMessageEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeSuccessMessage();
  }
};

const onErrorMessageEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeErrorMessage();
  }
};

const showSuccessMessage = () => {
  bodyContainer.appendChild(successMessage);
  document.addEventListener('keydown', onSuccessMessageEscKeydown);
};

const closeSuccessMessage = () => {
  bodyContainer.removeChild(successMessage);
  document.removeEventListener('keydown', onSuccessMessageEscKeydown);
};

const showErrorMessage = () => {
  bodyContainer.appendChild(errorMessage);
  document.addEventListener('keydown', onErrorMessageEscKeydown);
  document.onclick = closeErrorMessage;
};

const closeErrorMessage = () => {
  bodyContainer.removeChild(errorMessage);
  document.removeEventListener('keydown', onErrorMessageEscKeydown);
};

errorMessageCloseElement.addEventListener('click', () => {
  closeErrorMessage();
});

inputType.addEventListener('change', (evt) => {
  let type = evt.target.value;

  switch (type) {
    case 'bungalow':
      inputPrice.min = '0';
      inputPrice.placeholder = '0';
      break
    case 'flat':
      inputPrice.min = '1000';
      inputPrice.placeholder = '1000';
      break
    case 'house':
      inputPrice.min = '5000';
      inputPrice.placeholder = '5000';
      break
    case 'palace':
      inputPrice.min = '10000';
      inputPrice.placeholder = '10000';
      break
    default:
      // eslint-disable-next-line no-console
      console.log('Привет!');
      break
  }
});

timeIn.addEventListener('change', (evt) => {
  let time = evt.target.value;
  let time0 = timeOut.value;

  if (time != time0) {
    return timeOut.value = time;
  }
});

timeOut.addEventListener('change', (evt) => {
  let time = evt.target.value;
  let time0 = timeIn.value;

  if (time != time0) {
    return timeIn.value = time;
  }
});

inputGuestsCount.addEventListener('input', (evt) => {
  let selectedGuestsCount = evt.target.value;
  let selectedRoomsCount = inputRoomsCount.value;
  // eslint-disable-next-line no-console
  console.log(selectedGuestsCount);
  // eslint-disable-next-line no-console
  console.log(selectedRoomsCount);

  if (selectedGuestsCount != selectedRoomsCount) {
    switch (selectedGuestsCount) {
      case '1':
        inputGuestsCount.setCustomValidity('Для одного гостя доступна только одна комната');
        break
      case '2':
        inputGuestsCount.setCustomValidity('Для двух гостей доступны только две или три комнаты');
        break
      case '3':
        inputGuestsCount.setCustomValidity('Для трёх гостей доступны только три комнаты');
        break
      case '0':
        inputGuestsCount.setCustomValidity('Такое количество комнат не для гостей');
        break
      default:
        inputGuestsCount.setCustomValidity('');
        break
    }
  } else {
    inputGuestsCount.setCustomValidity('');
  }
});

inputRoomsCount.addEventListener('input', (evt) => {
  let selectedRoomsCount = evt.target.value;
  let selectedGuestsCount = inputRoomsCount.value;

  if (selectedRoomsCount != selectedGuestsCount) {

    switch (selectedRoomsCount) {
      case '1':
        inputRoomsCount.setCustomValidity('Одна комната доступна только одному гостю');
        break
      case '2':
        inputRoomsCount.setCustomValidity('Две комнаты доступны только одному или двум гостям');
        break
      case '3':
        inputRoomsCount.setCustomValidity('Три комнаты доступны одному, двум или трём гостям');
        break
      case '0':
        inputRoomsCount.setCustomValidity('Такое количество комнат не для гостей');
        break
      default:
        inputRoomsCount.setCustomValidity('');
        break
    }
  } else {
    inputRoomsCount.setCustomValidity('');
  }
});

// eslint-disable-next-line no-unused-vars
const submitForm = (onSuccess) => {

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);

    fetch(
      'https://22.javascript.pages.academy/404',
      {
        method: 'POST',
        body: formData,
      },
    ).then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        showErrorMessage();
      }
    })
      .catch(() => {
        showErrorMessage();
      });
  });
};


// resetButton.onclick = addressInput.value = '35.6895, 139.692';

export {form, submitForm, showSuccessMessage};
