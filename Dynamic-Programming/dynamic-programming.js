// Fibonacci sequence
// Fib(n) = Fib(n-1) + Fib(n-2)
// Fib(2) = 1, Fib(1) is 1

function fibSlow(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

function fibFast(n, memo = [undefined, 1, 1]) {
  if (memo[n] !== undefined) return memo[n];
  var res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;
  return res;
}

function fibTable(n) {
  if (n <= 2) return 1;
  let fibNums = [undefined, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}
