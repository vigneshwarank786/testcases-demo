function marks(a, b, c, d, e) {

  total = a + b + c + d + e;
    percentage = (total / 500.0) * 100;
    average = total / 5.0;

    var data={
        per : percentage,
        avr : average
    }

      return data;


}

module.exports=marks;
