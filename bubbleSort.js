function bubbleSort(arr) {
    let isSwapped = true;
    let memo = 0;
    let arrLength = arr.length - 1
    while (isSwapped) {
        isSwapped = false;
        for (let i = 0; i < arrLength - memo; i += 1) {
            if (arr[i] <= arr[i + 1]) {
                i += 1;
                continue;
            } else {
                temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                isSwapped = true;
            }
        }
        if (isSwapped) {
            memo += 1;
        }
    }
    return arr;
}
console.log(bubbleSort([5, 4, 1, 2, 3]));
console.log(bubbleSort([5, 4, 3, 2, 1, 2, 2, 4, 5, 6, 37, 87]));
//console.log(bubbleSort([5, 4, 3, 2, 1, 2, 2, 4, 5, 6, 7, 87, 12, 12, 12, 12, 12, 12, 12, 415, 61, 61, 7, 7]));