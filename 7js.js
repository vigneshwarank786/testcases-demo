function length(c) {

     m = c / 100;
     k = c / 10000;

     var data={
         meter:m,
         km:k
     }
     return data
}

module.exports=length;