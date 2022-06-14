const palin=require('./216js')


test("given number is palindrome or not",()=>{
    expect(palin(121)).toBe("yes")
})

test("given number is palindrome or not",()=>{
    expect(palin(126)).toBe("no")
})

