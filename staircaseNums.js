// Amazon coding problem
// There exists a staircase with N steps, and you can climb up either 1 or 2 steps at a time.

// Given N, write a function that returns the number of unique ways you can climb the staircase.
// The order of the steps matters.

// For example, if N is 4, then there are 5 unique ways:

// 1, 1, 1, 1
// 2, 1, 1
// 1, 2, 1
// 1, 1, 2
// 2, 2
// What if, instead of being able to climb 1 or 2 steps at a time,
//  you could climb any number from a set of positive integers X?
//   For example, if X = {1, 3, 5}, you could climb 1, 3, or 5 steps at a time.

function staircaseNums(list, n) {
    let memo = [1, 1];

    for (let i = 2; i <= n; i += 1) {
        let total = 0;
        for (let x = 0; x < list.length; x += 1) {
            if (i >= list[x]) total += memo[i - list[x]];
        }
        memo[i] = total;
    }
    return memo[n];
}

staircaseNums([1, 2, 3], 3); // 3; 1 2; 2 1; 1 1 1; -> 4
staircaseNums([1, 2, 3, 4], 4); // 4; 2 2; 2 1 1; 1 1 2; 1 2 1; 1 3; 3 1; 1 1 1 1; -> 8