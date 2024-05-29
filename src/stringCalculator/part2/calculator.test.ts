import { Calculator } from './Calculator';
import { NumberValidator } from './NumberValidator';
import { Parser } from './Parser';
import { UnsupportedNumbersFilter } from './UnsupportedNumbersFilter';

describe('StringCalculator', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator(
      new Parser(),
      new NumberValidator(),
      new UnsupportedNumbersFilter(),
    );
  });

  it('returns 0 when string is empty', () => {
    expect(calculator.add('')).toBe(0);
  });

  it.each([
    ['1', 1],
    ['2', 2],
    ['3', 3],
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
  ])('returns the sum of the input numbers', (input, expected) => {
    expect(calculator.add(input)).toBe(expected);
  });

  it('can handle an unknown amount of numbers', () => {
    expect(calculator.add('1,2,3,4,5,6,7,8,9,10')).toBe(55);
  });

  it('can handle new lines between numbers', () => {
    expect(calculator.add('1\n2,3')).toBe(6);
  });

  it('can handle different delimiters', () => {
    expect(calculator.add('\n1;2//;4')).toBe(7);
  });

  it.each([
    ['-1', 'Negatives not allowed: -1'],
    ['2,-3,-4', 'Negatives not allowed: -3, -4'],
  ])('throws an error when a negative number is passed', (input, expected) => {
    expect(() => calculator.add(input)).toThrow(expected);
  });

  it.each([
    ['2,1001', 2],
    ['1001,1001', 0],
  ])('ignores numbers greater than 1000', (input, expected) => {
    expect(calculator.add(input)).toBe(expected);
  });

  it('can handle delimiters of any length', () => {
    expect(calculator.add('//[***]\n1***2***3')).toBe(6);
  });
});