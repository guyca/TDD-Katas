export class InvalidNumbersFilter {
    public filter(parsed: number[]): number[] {
        return parsed.map((n) => n > 1000 ? 0 : n);
    }
}