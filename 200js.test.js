const rem=require('./200js')


test("remove extra braces",()=>{
    expect(rem( "        vickey         ")).toBe("vickey")
})