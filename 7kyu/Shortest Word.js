// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.
function findShort(s){
  let wordsArr = s.split(' ');
  let shortest = Infinity;
  for(let i = 0; i < wordsArr.length; i++){
    let wordLength = wordsArr[i].length;
    if(wordLength < shortest){
      shortest = wordLength;
    }
  }
  return shortest
}
