function array() {
  for (i = 1; i < arr.length; i++) {
    return arr;
  }
  return array(arr[i]);
}


var arr = ['a', 'b', 'c', 'd', 'e'];
i = 1;

console.log(" is " + array(arr[i]));


module.exports = array;