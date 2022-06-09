function arith(a,b){
     add=a+b;
     sub=a-b;
     mult=a*b;
     div=a/b;

    var data={
        addition:add,
        substraction:sub,
        multiplication:mult,
        division:div,
    }

    return data

    
  
}

module.exports=arith;