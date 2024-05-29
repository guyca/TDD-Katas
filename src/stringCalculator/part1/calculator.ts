export class  Calculator {
  public add(numbers: string): number {
    if (numbers.length === 0) return 0;
    const filteredNumbers = numbers.replace(/\n/g, ',');
    const parsedNumbers = filteredNumbers.split(',').map(Number);
    return parsedNumbers.reduce((acc, num) => acc + num, 0);
  }
}