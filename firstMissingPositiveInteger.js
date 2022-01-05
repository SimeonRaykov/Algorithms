// This problem was asked by Stripe.
// Given an array of integers, find the first missing positive integer in linear time and constant
// space. In other words, find the lowest positive integer that does not exist in the array. The array
// can contain duplicates and negative numbers as well.
// For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.
// You can modify the input array in-place.

function firstMissingPositiveInteger(list) {
  let hashMap = {};
  let missingPositiveInteger = 1;
  for (let i = 0; i < list.length; i += 1) {
    if (list[i] >= 1) {
      hashMap[list[i]] = list[i];
    }
  }

  while (true) {
    if (!hashMap[missingPositiveInteger]) {
      break;
    }
    missingPositiveInteger += 1;
  }

  return missingPositiveInteger;
}

firstMissingPositiveInteger([3, 4, -1, 1]); // 2
firstMissingPositiveInteger([1, 2, 0]); // 3
