import type { NumberValidator } from './NumberValidator';
import type { Parser } from './Parser';
import type { UnsupportedNumbersFilter } from './UnsupportedNumbersFilter';

export class Calculator {
  constructor(
    private parser: Parser,
    private validator: NumberValidator,
    private unsupportedNumbersFilter: UnsupportedNumbersFilter,
  ) {}

  public add(numbers: string): number {
    const parsed = this.parser.parse(numbers);
    this.validator.validate(parsed);
    const filtered = this.unsupportedNumbersFilter.filter(parsed);
    return filtered.reduce((acc, num) => acc + num);
  }
}