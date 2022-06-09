const simple=require('./17js')

test("find the simple interest",()=>{
    expect(simple(3,6,9)).toBe(1.62)
})