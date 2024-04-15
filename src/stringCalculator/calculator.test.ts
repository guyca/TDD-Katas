import { when } from 'jest-when';
import type { InputParser } from './InputParser';
import { Calculator } from './Calculator';
import { mockDeep } from 'jest-mock-extended';

describe('StringCalculator', () => {
  let calculator: Calculator;
  let inputParser: InputParser;

  beforeEach(() => {
    inputParser = mockDeep();
    calculator = new Calculator(inputParser);
  });

  it.each([
    ['2,3', [2, 3], 5],
    ['4,5', [4, 5], 9],
  ])('calculates two numbers', (input, parsed, expected) => {
    when(inputParser.parse).calledWith(input).mockReturnValue(parsed);

    const result = calculator.add(input);

    expect(result).toBe(expected);
  });
});
