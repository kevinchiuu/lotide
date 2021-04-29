const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('😁😁 Assertion Passed: ' + actual + ' === ' + expected);
  } else {
    console.log('😩😩 Assertion Failed: ' + actual + ' !== ' + expected);
  }
};

const removeSpace = function(str) {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      newStr += str[i + 1];
      i++;
    } else {
      newStr += str[i];
    }
  }

  return newStr;
};

const countLetters = function(str) {

  let results = {};
  let noSpaceStr = removeSpace(str);
  
  for (let letter of noSpaceStr) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }

  return results;
};

//console.log(countLetters('LHL'));
console.log(countLetters("lighthouse in the house"));