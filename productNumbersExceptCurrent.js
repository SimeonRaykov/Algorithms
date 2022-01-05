// This problem was asked by Uber.
// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

function productNumbersExceptCurrent(arr) {
  let left = new Array(arr.length);
  let right = new Array(arr.length);
  let prod = new Array(arr.length);

  let i = 1;
  let j = arr.length - 2;

  left[0] = 1;
  right[arr.length - 1] = 1;

  for (i = 1; i < arr.length; i++) {
    left[i] = arr[i - 1] * left[i - 1];
    right[j] = arr[j + 1] * right[j + 1];
    j -= 1;
  }

  for (i = 0; i < arr.length; i++) {
    prod[i] = left[i] * right[i];
  }
  return prod;
}

productNumbersExceptCurrent([3, 4, 5, 6]); // [120, 90, 72, 60]
