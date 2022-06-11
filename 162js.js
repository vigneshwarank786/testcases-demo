function matrix() {

    let MAX = 100;


    function transpose(mat, tr, N) 
    {
        for (let i = 0; i < N; i++)
        {
            for (let j = 0; j < N; j++)
            {
                tr[i][j] = mat[j][i];
            }
           
        }
            
    }


    function isSymmetric(mat, N) 
    {

        let tr = new Array(N);
        for (let i = 0; i < N; i++) 
        {
            tr[i] = new Array(MAX);
        }
        transpose(mat, tr, N);

        for (let i = 0; i < N; i++)
        {
            for (let j = 0; j < N; j++)
            {
                if (mat[i][j] != tr[i][j])
                {
                   return false;
                }
                 return true;
            }
        }
            
               
    }
    let mat = [[1, 3, 5],
    [3, 2, 4],
    [5, 4, 1]];

    if (isSymmetric(mat, 3)) {

        return ("Yes");
    }
    else {
        return ("No");
    }

}

module.exports = matrix;
