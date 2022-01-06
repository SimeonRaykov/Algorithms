// Google task
// Find first repeating n-th occurrence
// Return the first repeating occurrence or null if there is none

function firstRepeatingN(list) {
  let firstRepeating = null;
  let hashTable = {};
  for (let i = 0; i < list.length; i += 1) {
    if (hashTable[list[i]]) {
      firstRepeating = list[i];
      break;
    }

    hashTable[list[i]] = list[i];
  }
  return firstRepeating;
}

firstRepeatingN(["A", "B", "B", "A"]); // B
firstRepeatingN(["A", "B", "C", "D", "C"]); // C
firstRepeatingN(["B", "A", "D", "C", "A", "B"]); // A
