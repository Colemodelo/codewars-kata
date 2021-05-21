// Get ASCII value of a character.

// For the ASCII table you can refer to http://www.asciitable.com/
function getASCII(c){
  for (var i = 0; i < c.length; i++) {
    return c.charCodeAt(i)
  }
}
