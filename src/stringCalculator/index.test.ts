import { Calculator } from ".";

describe('StringCalculator', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  })

  it('returns 0 when string is empty', () => {
    expect(calculator.add('')).toBe(0);
  });

  it.each([
    ['1', 1],
    ['2', 2],
    ['3', 3]
  ])('returns the input as number when string length is 1', (input, expected) => {
    expect(calculator.add(input)).toBe(expected);
  });

  it.each([
    ['3,4', 7],
    ['5,6', 11],
    ['7,8', 15],
    ['9,10', 19],
    ['11,12', 23],
    ['0,0', 0],
    ['100,200', 300],
    ['-1,-1', -2],
    ['-10', -10]
  ])('returns the sum of the input numbers', (input, expected) => {
    expect(calculator.add(input)).toBe(expected);
  });

  it('can handle an unknown amount of numbers', () => {
    expect(calculator.add('1,2,3,4,5,6,7,8,9,10')).toBe(55);
  });

  it('can handle new lines between numbers', () => {
    expect(calculator.add('1\n2,3')).toBe(6);
  });
});
