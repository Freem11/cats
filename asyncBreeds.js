// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, cb) {
  // console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {

    // console.log("In readFile's Callback: it has the data.");
    if (!error) {
      cb(data);
    } else {
      cb(undefined)
    }
  });
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
};

const printOutCatBreed = breed => {
  return breed // => print out details correctly.
};

// we try to get the return value
//const bombay = breedDetailsFromFile('Bombay');

// breedDetailsFromFile('bombay', printOutCatBreed); // => will NOT print out details, instead we will see undefined!

module.exports = breedDetailsFromFile;

// breedDetailsFromFile('Bombay',(data) => {
//   console.log(data)
// })