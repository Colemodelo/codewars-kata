// This kata is about converting numbers to their binary or hexadecimal representation:

// If a number is even, convert it to binary.
// If a number is odd, convert it to hex.

const evensAndOdds = n => n % 2 === 0 ? (n >>> 0).toString(2) : n.toString(16)
