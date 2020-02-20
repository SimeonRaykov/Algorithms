function reverse(arr) {
    for (let i = 0; i < Math.floor(arr.length / 2); i += 1) {
        let temp = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - 1 - i] = temp;
    }
    return arr
}