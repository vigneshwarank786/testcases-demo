


function LoweMatrix() {
 N = 4;

     mat = [[1, 0, 0, 0],
               [1, 4, 0, 0],
               [4, 6, 2, 0],
             [0, 4, 7, 6]];

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
