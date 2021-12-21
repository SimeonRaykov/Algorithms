// Google coding challenge
// Add one in the array and return a new array

function addOneToArray(arr) {

    let resultArr = [...arr];

    for (let i = resultArr.length - 1; i >= 0; i -= 1) {
        if (resultArr[i] !== 9) {
            resultArr[i] += 1;
            break;
        } else {
            resultArr[i] = 0;
            if (i === 0) {
                resultArr.unshift(1);
            }
        }
    }

    return resultArr;
}


sumArrayNumbers([9, 9, 9, 8, 9]);
sumArrayNumbers([2, 3, 4, 9, 9]);
sumArrayNumbers([9]);
