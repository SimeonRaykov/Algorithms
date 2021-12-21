// Facebook coding challenge
// Move all the 0s to the right
// Example:  0 0 0 1 1 -> 1 1 0 0 0

function sortZeroes(arr) {

    let sortedArr = [...arr];
    for (let i = 0; i < sortedArr.length; i += 1) {
        if (sortedArr[i] === 0) {
            sortedArr.splice(sortedArr.length - 1, 0, sortedArr.splice(i, 1)[0]);
        }
    }

    return sortedArr;
}


console.log(sortZeroes([0, 1, 0, 1]));
console.log(sortZeroes([0, 0, 0, 0, 1, 1, 1, 1, 0, 0]));