function factorial(number) {
  if (number === 0) return 1;
  return number * factorial(number - 1);
} // O(n)

const ans = factorial(6);
console.log(ans);
