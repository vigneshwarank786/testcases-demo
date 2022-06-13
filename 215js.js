function reverseNum(n) {
    reversed='';
function recurse(n)
 {
      for (i = 0; i < n; i++) {
        num = n % 10; 
        reversed += num
        result = parseInt(n / 10); 
        recurse(result);
        if (result === 0) 
        {
          break;
        }
      }
      return reversed;
    };
    return recurse(n);
  }
  
  module.exports=reverseNum;