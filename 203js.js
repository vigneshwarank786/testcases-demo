  
  function maxmin(x,y){

    mx=((x + y + Math.abs(x - y)) / 2);
    mi=((x + y - Math.abs(x - y)) / 2);

    var data={
        maxi:mx,
        mini:mi
    }
    return data;
  }

module.exports=maxmin;