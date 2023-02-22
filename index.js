let ratioOfTwoNumbers = require("../ratio/index");
let factorialOfNumber = require("../factorial/index");
function ratioAndFactorial(a, b, c) {
  let ratio = ratioOfTwoNumbers(a, b);
  let factorial = factorialOfNumber(c);

  return { ratio: ratio, factorial: factorial };
}
module.exports = ratioAndFactorial;
