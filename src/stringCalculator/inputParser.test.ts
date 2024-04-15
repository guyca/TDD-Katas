import { InputParser } from './InputParser';

describe('InputParser', () => {
  let inputParser: InputParser;

  beforeEach(() => {
    inputParser = new InputParser();
  });

  it.each([
    ['2,3', [2, 3]],
    ['4,2', [4, 2]],
  ])('parses two numbers %s', (input, expected) => {
    expect(inputParser.parse(input)).toEqual(expected);
  });
});
