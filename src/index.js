module.exports = function reverse (n) {
  n = Math.abs(n);
  let nToString = n.toString();   
  let i = nToString.length - 1;
  let result = '';
  while (i >= 0){
    result = result + nToString[i];
    i = i - 1; 
  }
  return parseInt(result);
}
