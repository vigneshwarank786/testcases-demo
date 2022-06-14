function palin(n) {
    function rev(n, temp) {
        if (n == 0)
            return temp;
        temp = (temp * 10) + (n % 10);
        return rev(Math.floor(n / 10), temp);
    }
  
    temp = rev(n, 0);
    if (temp == n)
        return ("yes");
    else
        return ("no");
}

module.exports = palin;