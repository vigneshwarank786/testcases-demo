function matrix(){
  
    var i,j;
    var arr1 = [
     [5, 4],
     [1, 1]
    ];
    var arr2 = [
     [2, 2],
     [2, 2]
    ];
    var arr3 = [
     [0, 0],
     [0, 0]
    ];
    
    
    for(i=0; i<2; i++)
    {
     for(j=0; j<2; j++)
     {
      arr3[i][j] = arr1[i][j] -arr2[i][j];
      console.log(arr3[i][j] +" ");
     }
    }
   
   
}


module.exports=matrix;
    
    
    
    
      