const matrix=require('./146js')


test("sub two matrix",()=>{
    expect(matrix([
        [5, 4],
        [1, 1]
       ],[
        [2, 2],
        [3, 2]
       ],
       [
        [0, 0],
        [0, 0]
       ])).toStrictEqual()
})