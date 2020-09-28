// * 6. Anagram Grouping

// Array of strings => Array of Array of strings
function anagramGroup(wordList) {
  // Track categories of anagrams
  const categories = {};
  // Loop over wordList
  wordList.forEach(element => { 
    // ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']
    // {east: ['east'], cars: ['cars', 'arcs'], acre: ['acre']}
    console.log(element);
    console.log(categories);
    // If we see word belonging to known category, add it to that category
    const knownCategory = getKnownCategory(element, categories)
    if (knownCategory) {
      categories[knownCategory].push(element)
    } else {
      categories[element] = [element]
    }
  });
  // Return words in all categories
  return Object.values(categories);
}

function getKnownCategory(str, categories) {
  const categoryNames = Object.keys(categories)
  let ret = false;
  categoryNames.forEach(element => {
    if (isAnagram(element, str)) {
      // console.log("getKnownCategory -> element", element)
      ret = element;
    }
  })
  return ret;
}

function isAnagram(str1, str2) {
  const sortedStr1 = str1.split('').sort().join('')
  const sortedStr2 = str2.split('').sort().join('')

  return sortedStr1 === sortedStr2;
}

// console.log(
// anagramGroup(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']),
// [['east', 'teas', 'eats'], ['cars', 'arcs'], ['acre', 'race']]
// )

module.exports = {anagramGroup, isAnagram, getKnownCategory};