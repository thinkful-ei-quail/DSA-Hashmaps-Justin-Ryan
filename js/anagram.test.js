const {anagramGroup, isAnagram, getKnownCategory} = require('./anagram')


test('anagram group works', () => {
  expect(anagramGroup(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']))
  .toStrictEqual([['east', 'teas', 'eats'], ['cars', 'arcs'], ['acre', 'race']]);
});

// expect(
//   anagramGroup(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']),
//   [['east', 'teas', 'eats'], ['cars', 'arcs'], ['acre', 'race']]
//   )