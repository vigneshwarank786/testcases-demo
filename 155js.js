


function LoweMatrix(N,mat) {
 
    for (let i = 0; i < N - 1; i++) {
        for (let j = i + 1; j < N; j++) 
        {
            if (mat[i][j] != 0) {
                return false;
            }
            return true;
        }
    }
}


module.exports=LoweMatrix;
