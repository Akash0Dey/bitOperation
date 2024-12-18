function isPerfectPowerOf2(num) {
  return (num & num - 1) === 0;
}

function getMark(isPassed) {
  return isPassed ? '✅' : '❌';
}

function testMessage(number, expected) {
  const actual = isPerfectPowerOf2(number);
  const msg = number + ' actual ' + actual + ' expected ' + expected;

  console.log(getMark(actual === expected),'isPerfectPowerOf2', msg);
}

function testAll() {
  for (let number = 0; number <= 100; number++) {
    testMessage(number, Math.log2(number) === Math.floor(Math.log2(number)));
  }
}

testAll();