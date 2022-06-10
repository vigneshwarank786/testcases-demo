function prime(n) {

    flag = true;



    for (i = 2; i <= n - 1; i++)
        if (n % i == 0) {
            flag = false;
            break;
        }


    if (flag == true)
        console.log(n + " is prime");
    else
        console.log(n + " is not prime");
}



module.exports = prime;
