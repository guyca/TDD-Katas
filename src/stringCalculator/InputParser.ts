export class InputParser {
  parse(input: string): number[] {
    return input.split(',').map(Number);
  }
}
