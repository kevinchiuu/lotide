const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('😁😁 Assertion Passed: ' + actual + ' === ' + expected);
  } else {
    console.log('😩😩 Assertion Failed: ' + actual + ' !== ' + expected);
  }
};

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

const middle = function(arr) {
  let middleIndex = Math.floor(arr.length / 2);
  let newArr = [];

  if (arr.length <= 2) {
    return [];

  } else if ((arr.length % 2) !== 0) {
    newArr.push(arr[middleIndex]);

  } else if ((arr.length % 2) === 0) {
    newArr.push(arr[middleIndex - 1], arr[middleIndex]);
  }

  return newArr;
};

console.log(middle([1, 2, 3, 4, 5, 6]));