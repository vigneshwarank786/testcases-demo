function factorial(n) {
  if (n == 0) {
    return 1;
  }
  return n * factorial(n - 1);
}


var num = 5;
console.log(num + " is " + factorial(num));

module.exports = factorial;
