export class UnsupportedNumbersFilter {
  filter(numbers: number[]): number[] {
    return numbers.map(num => num > 1000 ? 0 : num);
  }
}