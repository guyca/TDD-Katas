import type { InvalidNumbersFilter } from './InvalidNumbersFilter';
import type { Parser } from './Parser';
import type { Validator } from './Validator';

export class Calculator {
  constructor(
    private parser: Parser,
    private validator: Validator,
    private invalidNumbersFilter: InvalidNumbersFilter,
  ) {}

  public add(numbers: string): number {
    const parsed = this.parser.parse(numbers);
    this.validator.validateInput(parsed);
    const validNumbers = this.invalidNumbersFilter.filter(parsed);
    return validNumbers.reduce((acc, n) => acc + n, 0);
  }

}
