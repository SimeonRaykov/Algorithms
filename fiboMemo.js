// Write fibonacci number sequence using memoization
function fiboMemo(n) {
  let memo = [0, 1];

  for (let i = 2; i <= n; i += 1) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }

  return memo[n];
}

fiboMemo(30); // 832040
