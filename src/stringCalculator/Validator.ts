export class Validator {
  public validateInput(parsed: number[]) {
    if (parsed.some((n) => n < 0)) {
      throw new Error(`negatives not allowed: ${parsed.filter((n) => n < 0).join(', ')}`);
    }
  }
}