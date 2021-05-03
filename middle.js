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

module.exports = middle;