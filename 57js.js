function printOdd(num) {
    for (let i=1; i<num; i++) {
      if(i % 2 !== 0) {
        console.log(i);
      }
    }
  }

  module.exports=printOdd;