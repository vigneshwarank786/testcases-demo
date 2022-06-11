const maxmin=require('./203js')


test("maximun and  minimum",()=>{
    expect(maxmin(99,18)).toStrictEqual({"maxi": 99, "mini": 18})
})