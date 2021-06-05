// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

// The solution would work like the following:

// getEvenNumbers([2,4,5,6]) // should == [2,4,6]
function getEvenNumbers(arr){
  let out = 0; 
  for (var i = 0; i < arr.length; i++) {
      if (! (arr[i] % 2)) {
        arr[out++] = arr[i]; 
      }
    }
    arr.length = out;
    return arr;
}
