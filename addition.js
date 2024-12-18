function lastBit(a) {
  return a & 1;
}

function adder(a, b) {
  let addition = '';
  let carry = 0;

  const add = lastBit(a) + lastBit(b);
  carry = add === 2 ? 1 : 0;
  addition = lastBit(add) + addition; 

  return addition;
}