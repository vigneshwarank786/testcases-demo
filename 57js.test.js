const printOdd=require('./57js')


test("print the odd numbers",()=>{
    expect(printOdd(10)).toStrictEqual(1,3,5,7,9)
})