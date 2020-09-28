// * 5 Any permutation a palindrome

const HashMap = require('./hash');

const racecar = { r: 2, a: 2, c: 2, e: 1 };
const racecabin = { r: 1, a: 2, c: 2, e: 1, b: 1, i: 1, n: 1 };
const racecard = { r: 2, a: 2, c: 2, e: 1, d: 1 };
const eracecard = { r: 2, a: 2, c: 2, e: 2, d: 1 }; // racedecar
const racecare = { r: 2, a: 2, c: 2, e: 2 }; // raceecar
const eracecare = { r: 2, a: 2, c: 2, e: 3 }; // raceeecar

// function pal(string) {
//   // make hashmap
//   const chars = {};

//   for (let i = 0; i < string.length; i++) {
//     let character = string.charAt(i);
//     if (chars[character]) {
//       chars[character]++;
//     } else {
//       chars[character] = 1;
//     }
//   }

//   // Look for the palindrome pattern
//   // [2, 2, 2, 1];
//   const arr = [2, 2, 2, 2];

//   for (let i = 0; i < arr.length; i++) {
//     // if (arr[i] % 2 === 0) {
//     //   return true;
//     // }
//     if (arr[0] === arr[i]) {
//       return false;
//     }
//   }
//   return true;
//   // return hashmap;
// }

function isScrambledPalindrome(input) {
  var chars = {};
  input.split('').forEach(function (char) {
    console.log('Chars: ', chars);
    console.log('Char: ', char);
    if (chars[char]) {
      delete chars[char];
    } else {
      chars[char] = 'odd';
    }
  });
  // console.log(chars);
  return Object.keys(chars).length <= 1;
}

console.log(isScrambledPalindrome('racecar'));

// let string = 'string';
// let arr = string.split('');
// console.log(arr);
