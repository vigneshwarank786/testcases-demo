const array=require('./123js')


test("print the all array using recursion",()=>{
    expect(array()).toStrictEqual(["a", "b", "c", "d", "e"])
})