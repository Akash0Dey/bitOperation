function division(a, b) {
  return a >> Math.log2(b);
}

function divisionBy5(number) {
  return number
}

function getMark(isPassed) {
  return isPassed ? '✅' : '❌';
}

function random(number) {
  return Math.floor(Math.random() * number) + 1;
}

function testMessage(number1, number2, expected) {
  const actual = division(number1, number2);
  const msg = '/ ' + number2 + ' actual ' + actual + ' expected ' + expected;

  console.log(getMark(actual === expected), number1, msg);

  return actual === expected ? 1 : 0;
}

function testAll() {
  let count = 0;
  const total = 100;

  for (let number = 0; number <= 100; number++) {
    const random1 = random(number + 5);
    const random2 = random(number + 5);
    count += testMessage(random1, random2, Math.floor(random1 / random2));
  }

  console.log('\n\n' + getMark(true), count, '\n' + getMark(false), total - count);
}

testAll();