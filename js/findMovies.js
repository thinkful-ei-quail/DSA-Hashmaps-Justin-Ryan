/* eslint-disable no-console */

function findMovies(time, movieLengths) {
  // Make sure there are at least two movies
  if (movieLengths.length < 2) {
    return false;
  }

  for (let i = 0; i < movieLengths.length; i++) {
    // compare each film with each other film
    const movieLengthA = movieLengths[i];
    for (let j = i + 1; j < movieLengths.length; j++) {
      const movieLengthB = movieLengths[j];
      if (movieLengthA + movieLengthB === time) {
        return true;
      }
    }
  }
  return false;
}

console.log(findMovies(180, [60, 210, 90, 120])); // true - 60 + 120 = 180
console.log(findMovies(190, [60, 210, 90, 120])); // false
console.log(findMovies(180, [210, 90, 120])); // false
console.log(findMovies(180, [210, 90, 120, 90])); // true
console.log(findMovies(180, [180, 90, 120])); // false

//! Something is wrong - they do not match in results

function movieFind(time, movieLengths) {
  if (movieLengths.length < 2) {
    return false;
  }

  const timeRemaining = {};

  for (let i = 0; i < movieLengths.length; i++) {
    const movieLengthA = movieLengths[i];
    timeRemaining[time - movieLengthA] = true;
  }

  for (let i = 0; i < movieLengths.length; i++) {
    const movieLengthB = movieLengths[i];
    if (movieLengthB in timeRemaining && timeRemaining[movieLengthB] !== i) {
      return true;
    }
  }
  return false;
}

console.log('--------');

console.log(movieFind(180, [60, 210, 90, 120])); // true - 60 + 120 = 180
console.log(movieFind(190, [60, 210, 90, 120])); // false
console.log(movieFind(180, [210, 90, 120])); // false
console.log(movieFind(180, [210, 90, 120, 90])); // true
console.log(movieFind(180, [180, 90, 120])); // false
