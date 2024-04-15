export class Calculator {
  public add(numbers: string): number {
    const parsed = this.parse(numbers);
    return parsed.reduce((acc, num) => acc + num);
  }

  private parse(numbers: string): number[] {
    if (numbers === '') return [0];
    return numbers
      .split(/[\n,]/)
      .map((num) => parseInt(num));
  }
}
