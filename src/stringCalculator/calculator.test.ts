import { Parser } from './Parser';
import { Calculator } from './Calculator';
import { Validator } from './Validator';
import { InvalidNumbersFilter } from './InvalidNumbersFilter';

describe('StringCalculator', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator(
      new Parser(),
      new Validator(),
      new InvalidNumbersFilter(),
    );
  });

  it('returns 0 for empty string', () => {
    expect(calculator.add('')).toBe(0);
  });

  it.each([
    ['1', 1],
    ['2', 2],
  ])('returns the digit %s when the input is single digit', (input, expected) => {
    expect(calculator.add(input)).toBe(expected);
  });

  it.each([
    ['1,2', 3],
    ['3,4', 7],
    ['30,4', 34],
  ])('returns the sum of %s when the input is two digits', (input, expected) => {
    expect(calculator.add(input)).toBe(expected);
  });

  it('can handle more than two numbers', () => {
    expect(calculator.add('1,2,3')).toBe(6);
  });

  it('can handle new lines as separators', () => {
    expect(calculator.add('1\n2,3')).toBe(6);
  });

  it('can handle custom separators', () => {
    expect(calculator.add('1;2//3?0')).toBe(6);
  });

  it.each([
    ['-1', 'negatives not allowed: -1'],
    ['1,-2', 'negatives not allowed: -2'],
    ['1,-2,3,-4', 'negatives not allowed: -2, -4'],
  ])('throws an exception when the input %s contains negative numbers', (input, expected) => {
    expect(() => calculator.add(input)).toThrow(expected);
  });

  it.each([
    ['1,1001', 1],
    ['1001', 0],
  ])('ignores numbers greater than 1000 and returns %s', (input, expected) => {
    expect(calculator.add(input)).toBe(expected);
  });

  it('can handle custom separators of any length', () => {
    expect(calculator.add('1?**2*\n*3')).toBe(6);
  });
});
