const form = document.querySelector('.ad-form');
const inputType = form.querySelector('#type');
const inputPrice = form.querySelector('#price');
const timeIn = form.querySelector('#timein');
const timeOut = form.querySelector('#timeout');

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
