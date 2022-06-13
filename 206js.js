
function intervel(a, b) {
    let i, j, flag;
    for (i = a; i <= b; i++) 
    {

        if (i == 1 || i == 0) 
        {
            continue;
        }
        flag = 1;

        for (j = 2; j <= i / 2; ++j) {
            if (i % j == 0) 
            {
                flag = 0;
                break;
            }
        }

        if (flag == 1) 
        {
           console.log(i)
        }
    }
}

module.exports=intervel;

