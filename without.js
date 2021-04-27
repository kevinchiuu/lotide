const eqArrays = function(arr1, arr2) {

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      return true;
    } else {
      return false;
    }
  }

};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log('😁😁 Assertion Passed: ' + arr1 + ' === ' + arr2);
  } else {
    console.log('😩😩 Assertion Failed: ' + arr1 + ' !== ' + arr2);
  }
};

const without = function(source, remove) {
  let newArr = [];

  for (let i = 0; i < source.length; i++) {
    if (source[i] !== remove[i]) {
      newArr.push(source[i]);
    }
  }

  return newArr;

};
