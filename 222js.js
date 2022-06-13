function array() {
    for (i = 1; i < arr.length; i++) {
      return arr;
    }
    return array(arr[i]);
  }
  
  
  var arr = ['vicky', 'robin', 'dhatchu'];
  i = 1;
  
  console.log(" is " + array(arr[i]));
  
  
  module.exports = array;