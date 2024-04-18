export class NumberValidator {
  validate(numbers: number[]): void {
    const negatives = numbers.filter(num => num < 0);
    if (negatives.length > 0) {
      throw new Error(`Negatives not allowed: ${negatives.join(', ')}`);
    }
  }
}