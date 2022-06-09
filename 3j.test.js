

const arith=require('./3js')

test("arithmetic operation",()=>{
    expect(arith(2,2)).toStrictEqual({addition:4,substraction:0,multiplication:4,division:1});
})