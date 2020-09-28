/* eslint-disable no-console */
const HashMap = require('./hash');

//* 1. HashMap Class

// For your hash map that you have created,
// set the MAX_LOAD_RATIO = 0.5 and SIZE_RATIO = 3.

function main() {
  const lotr = new HashMap();

  lotr.set('Hobbit', 'Bilbo');
  lotr.set('Hobbit', 'Frodo');
  lotr.set('Wizard', 'Gandalf');
  lotr.set('Human', 'Aragorn');
  lotr.set('Elf', 'Legolas');
  lotr.set('Maiar', 'The Necromancer');
  lotr.set('Maiar', 'Sauron');
  lotr.set('RingBearer', 'Gollum');
  lotr.set('LadyOfLight', 'Galadriel');
  lotr.set('HalfElven', 'Arwen');
  lotr.set('Ent', 'Treebeard');

  console.log(lotr);

  console.log(lotr.get('Maiar')); // Sauron
  console.log(lotr.get('Hobbit')); // Frodo
  console.log(lotr._capacity); // 8
}

main();

//* WhatDoesThisDo ???

const WhatDoesThisDo = function () {
  let str1 = 'Hello World.';
  let str2 = 'Hello World.';
  let map1 = new HashMap();
  map1.set(str1, 10);
  map1.set(str2, 20);
  let map2 = new HashMap();
  let str3 = str1;
  let str4 = str2;
  map2.set(str3, 20);
  map2.set(str4, 10);

  console.log(map1.get(str1));
  console.log(map2.get(str3));
};

// Creates two Hashmaps
//

WhatDoesThisDo(); // 20 10
// The get returns the last entered set
