const celsious=require('./8js')

test("celsius convert in farenheit",()=>{
    expect(celsious(100)).toBe(212)
})