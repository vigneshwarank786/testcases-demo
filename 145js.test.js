const matrix=require('./145js')


test("add two matrix",()=>{
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
       ])).toStrictEqual([
        [7, 6],
        [3, 3]
       ])
})