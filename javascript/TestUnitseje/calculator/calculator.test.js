const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

test('La multiplicacion de 2 * 3 es igual a 6', () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});

test('La multiplicacion de 5 * 2 es igual a 10', () => {
  expect(calculator.multiply(5, 2)).toBe(10);
});

test('La division de 9 / 3 es igual a 3', () => {
  expect(calculator.divide(9, 3)).toBe(3);
});

test('La division de 12 / 4 es igual a 3', () => {
  expect(calculator.divide(12, 4)).toBe(3);
});






