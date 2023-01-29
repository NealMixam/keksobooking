const filtersForm = document.querySelector('.map__filters');
const houseTypeInput = filtersForm.querySelector('#housing-type');

const selectHouseType = (cb) => {
  houseTypeInput.addEventListener('input', (evt) => {
    let selectedHouseType = evt.target.value;
    // eslint-disable-next-line no-console
    console.log(selectedHouseType);
    cb();
  });
};

export { selectHouseType };
