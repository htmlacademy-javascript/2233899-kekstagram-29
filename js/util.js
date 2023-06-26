// Cлучайные числа
const getRandomNumder = function (min, max) {
  return Math.round(Math.random() * (max - min + 1)) + min;
};
getRandomNumder();

// Универсальные числа
const getUniqueNumber = function (min, max) {
  const usedNumbers = [];

  return function () {
    let currentNumber = getRandomNumder(min, max);

    while (usedNumbers.includes(currentNumber)) {
      currentNumber = getRandomNumder(min, max);
    }
    usedNumbers.push(currentNumber);
    return currentNumber;
  };
};
getUniqueNumber ();

export {getRandomNumder, getUniqueNumber};
