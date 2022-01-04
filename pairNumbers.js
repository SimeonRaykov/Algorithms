//  Google coding task
//  Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
//  For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

function pairsAddUp(list, k) {
    let pairs = {
        [list[0]]: list[0]
    };

    for (let i = 1; i < list.length; i += 1) {
        const numToSearch = k - list[i];
        if (pairs[numToSearch]) {
            return true;
        }
        pairs[list[i]] = list[i];

    }
    return false;
}

console.log(pairsAddUp([10, 7], 17));