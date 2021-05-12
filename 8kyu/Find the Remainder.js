// Write a function that accepts two arguments and returns the remainder after dividing the larger number by the smaller number. 
// Division by zero should return NaN (in C#, throw a new DivideByZeroException instead). Arguments will both be integers.

const remainder = (a, b) => a > b ? a % b : b % a
