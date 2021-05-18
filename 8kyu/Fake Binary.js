// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
function fakeBin(x){
  var arr = [];
  x = "" + x + "";
  x.split("").join(",");
  
  for(var i = 0;i<x.length;i++){
    if(x[i] < 5){
      arr.push(0);
    }
    else{
      arr.push(1);
    }
  }
  return arr.join("");
}
