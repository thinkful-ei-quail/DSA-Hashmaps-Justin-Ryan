/* eslint-disable no-console */
// * 4 Remove Duplicates

// google
const google = { g: 2, o: 2, l: 1, e: 1 };

function removeDuplicates(string) {
  const hashmap = {};

  for (let i = 0; i < string.length; i++) {
    let character = string.charAt(i);
    if (hashmap[character]) {
      hashmap[character]++;
    } else {
      hashmap[character] = 1;
    }
  }

  const letters = Object.keys(hashmap);

  return letters.join('');
}

console.log(removeDuplicates('google'));
