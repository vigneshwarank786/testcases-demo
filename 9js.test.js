const fahrenheit=require('./9js')

test("fahrenheit convert into celsius",()=>{
    expect (fahrenheit(63)).toBe(17.22222222222222)
})