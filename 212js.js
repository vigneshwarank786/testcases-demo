function Even(a, b)
{
	if (b < a)
	{
		return;
	}
	if (b % 2 == 0 )
	{
		Even(a, b - 2);
	}
	else
	{
		Even(a, b - 1);
	}
	
	if (b % 2 == 0)
	{
		console.log(b + " ");
 
	}
}

module.exports=Even;

function Odd(a, b)
{
	if (b < a)
	{
		return;
	}
	if (b % 2 == 1 )
	{
		Odd(a, b - 2);
	}
	else
	{
		Odd(a, b- 1);
	}
	if (b % 2 == 1)
	{
		console.log(b + " ");
	}
}


module.exports=Odd;