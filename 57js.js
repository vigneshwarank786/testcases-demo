function printOdd(num) {
    for (let i=1; i<num; i++) {
      if(i % 2 !== 0) {
        return (i);
      }
    }
  }

  module.exports=printOdd;