import type { InputParser } from './InputParser';

export class Calculator {
  constructor(private inputParser: InputParser) {}

  add(numbers: string): number {
    const parsedNumbers = this.inputParser.parse(numbers);
    return parsedNumbers[0] + parsedNumbers[1];
  }
}
