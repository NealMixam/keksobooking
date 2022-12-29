const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const getRandomNumber = (min, max, amount) => {
  if (min < 0 || max < 0) {
    return -1;
  }
  if (max < min) {
    [min, max] = [max, min];
  }
  return Number(Math.random() * (max - min) + min).toFixed(amount);
};

export {getRandomInteger, getRandomNumber};
