export class Parser {
  public parse(numbers: string): number[] {
    if (numbers === '') return [0];
    return numbers.split(
      /[^-\d]+/,
    ).map((n) => parseInt(n));
  }
}