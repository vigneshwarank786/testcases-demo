const reverse=require('./123js')


test("print the all array using recursion",()=>{
    expect(reverse(['a', 'b', 'c', 'd', 'e'])).toStrictEqual(["a", "b", "c", "d", "e"])
})