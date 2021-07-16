let fact = 5;
let result = 1;
let counter = 1;

while (counter < fact) {
  result *= counter + 1;
  counter++;
}
console.log(result);

let factorial = 5;
let res = 1;
for (let i = 1; i < factorial; i++) {
  res = res * (i + 1);
}
console.log(res);

const getFactorial = function (number) {
  if (isNaN(number)) {
    return null;
  }
  if (number < 0) {
    return null;
  }
  if (number === 0) {
    return 1;
  }

  let resultFact = 1;

  for (let i = 1; i <= number; i++) {
    resultFact = resultFact * i;
  }
  return resultFact;
};
