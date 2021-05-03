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
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  const obj1Keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);
  
  if (obj1Keys.length !== obj2Keys.length) {
    return false;

  } else {
    for (let key of obj1Keys) {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  }
  
};




const ab = { a: "1", b: ["2", 3] };
const ba = { b: ["2", 3], a: "1" };
//eqObjects(ab, ba); // => true
//console.log(eqObjects(ab, ba));

console.log(eqObjects(ab, ba));


const abc = { a: "1", b: "2", c: "3" };
//eqObjects(ab, abc); // => false
console.log(eqObjects(ab, abc));

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
//eqObjects(cd, dc); // => true
//console.log(eqObjects(cd,dc));

const cd2 = { c: "1", d: ["2", 3, 4] };
//eqObjects(cd, cd2); // => false
console.log(eqObjects(cd, cd2));