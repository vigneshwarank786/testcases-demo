function perfect(number) 
{
    var temp = 0;
    for (var i = 1; i <= number / 2; i++)
     {
        if (number % i === 0) {
            temp += i;
        }
    }

    if (temp === number && temp !== 0) 
    {
        return ("It is a perfect number.");
    }
    else 
    {
        return ("It is not a perfect number.");
    }
}


module.exports=perfect;