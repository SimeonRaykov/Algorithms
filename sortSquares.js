// Facebook coding interview sorted squares
// Input will be sorted array
// Output should be sorted squares

function sortSquares(arr) {
    let sortedSquares = new Array(arr).fill(0);

    let leftPointer = 0;
    let rightPointer = arr.length - 1;

    for (let i = arr.length - 1; i >= 0; i -= 1) {
        if (Math.abs(arr[leftPointer]) > arr[rightPointer]) {
            sortedSquares[i] = arr[leftPointer] * arr[leftPointer];
            leftPointer += 1;
        } else {
            sortedSquares[i] = arr[rightPointer] * arr[rightPointer];
            rightPointer -= 1;
        }
    }

    return sortedSquares;
}

sortSquares([-5, -4, 1, 3, 99]);