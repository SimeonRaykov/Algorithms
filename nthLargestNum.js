// Find nth largest number
// Partitioning solution

function nthLargestNum(list, n) {
  let listCopy = [...list];
  let partitions = 0;

  for (let i = 0; i < listCopy.length; i += 1) {
    if (listCopy[i] > listCopy[i + 1]) {
      let temp = listCopy[i];
      listCopy[i] = listCopy[i + 1];
      listCopy[i + 1] = temp;
    }
    if (i === listCopy.length - 1 - partitions) {
      i = -1;
      partitions += 1;
      if (partitions === n) {
        break;
      }
    }
  }

  let counter = 0;
  for (let x = listCopy.length - 1; counter < n; x -= 1) {
    console.log(listCopy[x]);
    counter += 1;
  }
}

nthLargestNum([5, 6, 1, 2, 3, 5], 2); // 6 5
nthLargestNum([100, 200, 3000, 12, 50, 90, 2005, 52550], 3); // 52550 3000 2005
