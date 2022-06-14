const reverse=require('./138js')


test("reverse an array",()=>{
    expect(reverse(['vickey','robin'])).toStrictEqual(["robin", "vickey"])
})