function recursion(a, n) 
{
   if (n === 0) 
   {
    return 1;
    }
  else 
  {
    return a * recursion(a, n-1);
  }
}


module.exports=recursion;
