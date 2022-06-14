function reverse(val) {
  function array() {
    for (i = 1; i < arr.length; i++) {
      return arr;
    }
    return array(arr[i]);
  }
  var arr = val;
  i = 1;
  return (array(arr[i]));
}




module.exports = reverse;