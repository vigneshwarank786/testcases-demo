const LoweMatrix=require('./155js')


test("find lower traingle  of matrix",()=>{
    expect(LoweMatrix(4,[[1, 0, 0, 0],
        [1, 4, 0, 0],
        [4, 6, 2, 0],
      [0, 4, 7, 6]])).toBe(true)
})