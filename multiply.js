function multiply(a, b) {
  let product = 0;
  let multiplicant = b;

  while (multiplicant !== 0) {
    const leftShift = Math.floor(Math.log2(multiplicant));
    product += a << leftShift;
    multiplicant -= Math.pow(2, leftShift);
  }

  return product;
}

function getMark(isPassed) {
  return isPassed ? '✅' : '❌';
}

function random(number) {
  return Math.floor(Math.random() * number) + 1;
}

function testMessage(number1, number2, expected) {
  const actual = multiply(number1, number2);
  const msg = '* ' + number2 + ' actual ' + actual + ' expected ' + expected;

  console.log(getMark(actual === expected), number1, msg);
}

function testAll() {
  for (let number = 0; number <= 100; number++) {
    const random1 = random(number + 5);
    const random2 = random(number + 5);
    testMessage(random1, random2, random1 * random2);
  }
}

testAll();