// Write function that checks if a given string (case insensitive) is a palindrome.
const isPalindrome = str =>  str.split('').reverse().join('').toLowerCase() === str.toLowerCase() ? true : false;
