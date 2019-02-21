const uniqueRandomArray = require('unique-random-array');
const starWarsNames = require('./starwars-names.json');

const getRandomItem = uniqueRandomArray(starWarsNames);

module.exports = {
  all: starWarsNames,
  random: random,
  randomint:getRandomInt
};

function random(number) {
  if (number === undefined) {
    return getRandomItem();
  } else {
    const randomItems = [];
    for (let i = 0; i < number; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
}
	function getRandomInt(number) {
  return Math.floor(Math.random() * Math.floor(number));
}