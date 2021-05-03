# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @kevchew/lotide`

**Require it:**

`const _ = require('@kevchew/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(...)`: Compares two arrays to see if they are equal and will print an assertion message accordingly.
* `assertEqual(...)`: Compares two values to see if they are equal and will print an assertion message accordingly.
* `assertObjectsEqual(...)`: Compares two objects to see if they are equal and will print an assertion message accordingly.
* `countLetters(...)`: will count the number of letters in a given string.
* `countOnly(...)`: Takes two objects. First will be an object of items and second will be the items that need to be counted.
* `eqArrays(...)`: Will compare to two arrays to see if its values are equal.
* `eqObjects(...)`: Will compare two obecjts to see if its key value pairs are equal.
* `findKey(...)`: Will take an object and identify the first instance of that value and return its key.
* `findKeyByValue(...)`: Will identify the input value's corresponding key.
* `flatten(...)`: Takes in an array that may contain nested arrays of elements and join into one final sorted array
* `head(...)`: Takes the first element of an array
* `letterPositions(...)`: Returns an object of each letter and its positions(in key value pairs) of the inputted string.
* `map(...)`: Will iterate over an array and apply a specific function to each items of the array.
* `middle(...)`: Will return the middle elements of an array.
* `tail`: Returns everything but the first element of the array.
* `takeUntil(...)`: Will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.
* `without(...)`: Takes two arrays. First an array of elements, Second an array of elements to take out. Returns a new array with only elements that are taken out remaining.