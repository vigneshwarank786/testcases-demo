const concate=require('./165js')


test("concatinate of string",()=>{
    expect(concate("hello","hi")).toBe("hellohi")
})