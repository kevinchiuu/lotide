const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('😁😁 Assertion Passed: ' + actual + ' === ' + expected);
  } else {
    console.log('😩😩 Assertion Failed: ' + actual + ' !== ' + expected);
  }
};

const tail = function(arr) {
  return arr.slice(1)
}

const words = ["Yo Yo", "Lighthouse", "Labs"];


const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!