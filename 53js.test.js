const natural=require('./53js')

test("find the natural number from 1 to n",()=>{
    expect(natural(5)).toBe(1,2,3,4,5)
})