export class Parser {
  parse(numbers: string): number[] {
    if (numbers === '') return [0];
    return numbers
      .match(/-?\d+/g)
      .map((num) => parseInt(num));
  }
}