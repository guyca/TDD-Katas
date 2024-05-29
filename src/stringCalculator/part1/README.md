# String Calculator Kata
Welcome to the String Calculator Kata, a coding exercise designed to practice Test-Driven Development (TDD). This Kata was originally proposed by Roy Osherove and can be found [here](https://osherove.com/tdd-kata-1).

## Objective
The main goal of this Kata is to implement a simple calculator that takes a string of numbers separated by commas (and eventually other delimiters) and returns their sum. The Kata is divided into several steps, each one adding a new rule or constraint to the calculator's behavior.

## Instructions
For this TDD kata, we will focus exclusively on incremental development without any refactoring. Your task is to implement the functionality in `calculator.ts` and write corresponding tests in `calculator.test.ts`. Concentrate on adding small pieces of functionality step-by-step, and write tests for each new piece of functionality before you implement it. This exercise is designed to help you practice the rhythm of test-driven development (TDD) by making incremental progress and ensuring your code works as expected at each step. Refrain from refactoring any code during this exercise; we'll focus on that in future katas.

## Steps
1. The calculator can take 0, 1, or 2 numbers separated by a comma, and will return their sum. An empty string will return 0.
    ``` ts
    function add(numbers: string): number
    ```
    **Hints:**

    * Start with the <u>simplest</u> test case of an empty string and move to one and two numbers.
    * Remember to solve things as simply as possible so that you force yourself to write tests you did not think about.
    * Remember to refactor after each passing test.

2. The calculator can handle an unknown amount of numbers.
3. The calculator can handle new lines between numbers.
4. The calculator supports different delimiters.
5. The calculator throws an exception for negative numbers and shows all negative numbers in the exception message.
6. Numbers bigger than 1000 should be ignored.
7. Delimiters can be of any length.
<br><br>
**Happy coding!**