// Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD
const alternateCase = s => {
  let alternateString = '';
  for(let i = 0; i < s.length; i++){
    s[i] === s[i].toLowerCase() ? alternateString += s[i].toUpperCase() : alternateString += s[i].toLowerCase()
  }
  return alternateString
}
