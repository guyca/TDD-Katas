export class Calculator {
  public add(numbers: string): number {
    const parsed = this.parse(numbers);
    this.validate(parsed);
    const filtered = this.filterUnsupportedNumbers(parsed);
    return filtered.reduce((acc, num) => acc + num);
  }

  private parse(numbers: string): number[] {
    if (numbers === '') return [0];
    return numbers
      .match(/-?\d+/g)
      .map((num) => parseInt(num));
  }

  private validate(numbers: number[]): void {
    const negatives = numbers.filter(num => num < 0);
    if (negatives.length > 0) {
      throw new Error(`Negatives not allowed: ${negatives.join(', ')}`);
    }
  }

  private filterUnsupportedNumbers(numbers: number[]): number[] {
    return numbers.map(num => num > 1000 ? 0 : num);
  }
}