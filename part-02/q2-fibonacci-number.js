// Q2. FIBONACCI NUMBER
/* 
    fibonacci series => 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...
    f(0) => 0
    f(3) => 1
    f(n) => f(n-1) + f(n-2), for n>1
    input: n=3 => 2
*/

const n = 3;

const series = [0, 1];
const fibonacci = n => {
  for (let i = 2; i <= n; i++) {
    series.push(series[i - 1] + series[i - 2]);
  }
  return series;
};
const result = fibonacci(n);
console.log(result);
console.log(result[n]);

// or

const fibonacci2 = n => {
  if (n <= 1) return n;

  return fibonacci2(n - 1) + fibonacci2(n - 2);
};
const result2 = fibonacci2(n);
console.log(result2);

/* 
    n = 3
    fibonacci2(3-1) + fibonacci2(3-2)
    => 1 + 1 => 2

    fibonacci2(2) =>
        fibonacci2(2-1) + fibonacci2(2-2)
        => 1 + 0 => 1
*/
