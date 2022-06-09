const comp=require('./18js')

test("find the compound interest",()=>{
    expect(comp(3,6,9)).toBe(5.031300332523002)
})