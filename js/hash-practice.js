/* eslint-disable no-console */
const HashMap = require('./hash');

const funHash = new HashMap();

// console.log(funHash);

funHash.set('roy', 'roy');
funHash.set('roy1', 'roy1');
funHash.set('roy2', 'roy2');
funHash.set('roy3', 'roy3');
funHash.set('roy4', 'roy4');
funHash.set('roy5', 'roy5');
funHash.set('roy6', 'roy6');
funHash.set('roy7', 'roy7');
funHash.set('roy8', 'roy8');

funHash.set('name', 'alice');
funHash.set('name', 'zach');
funHash.set('name', 'mary');
funHash.set('name', 'jay');

console.log(funHash._hashTable);

console.log(funHash._hashTable[0]);
console.log(funHash._hashTable[1]);
console.log(funHash._hashTable[2]);
console.log(funHash._hashTable[3]);
console.log(funHash._hashTable[4]);
console.log(funHash._hashTable[5]);
console.log(funHash._hashTable[6]);
console.log(funHash._hashTable[7]);
console.log(funHash._hashTable[8]);
console.log(funHash._hashTable[9]);
console.log(funHash._hashTable[10]);

//console.log(funHash._findSlot());
