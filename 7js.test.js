const length=require('./7js')

test("enter length in cm in convert into km and metere",()=>{
    expect(length(10000)).toStrictEqual({meter:100,km:1})
})