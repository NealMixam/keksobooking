const getRandomInteger = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (max < min) {
    [min, max] = [max, min];
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
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
