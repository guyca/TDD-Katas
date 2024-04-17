# String Calculator Kata
Welcome to the String Calculator Kata, a coding exercise designed to practice Test-Driven Development (TDD). This Kata was originally proposed by Roy Osherove and can be found here.

## Objective
The main goal of this Kata is to implement a simple calculator that takes a string of numbers separated by commas (and eventually other delimiters) and returns their sum. The Kata is divided into several steps, each one adding a new rule or constraint to the calculator's behavior.

## How to Start
1. Clone this repository.
3. Start with the simplest test case of an empty string and move to one and two numbers.
4. Remember to solve things as simply as possible so that you force yourself to write tests you did not think about.
5. Remember to refactor after each passing test.

## Rules
* Try not to read ahead.
* Do one task at a time. The trick is to learn to work incrementally.
* Make sure you only test for correct inputs. There is no need to test for invalid inputs for this kata.

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
8. The calculator allows multiple delimiters.


**Happy coding!**