// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1
const sameCase = (a, b) => {
  if((/[a-zA-Z]/).test(a) === false || (/[a-zA-Z]/).test(b) === false) return -1
  if((a === a.toLowerCase() && b === b.toUpperCase()) || (a === a.toUpperCase() && b === b.toLowerCase())) return 0 
  if(a === a && b === b) return 1 
}
