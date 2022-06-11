const dub=require('./135js')


test("find dublicate array",()=>{
    expect(dub()).toStrictEqual({"a": 2, "b": 1, "c": 1})
})