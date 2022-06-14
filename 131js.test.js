const insertElement=require('./131js')


test("insert element array",()=>{
    expect(insertElement([1,2,3,4,5])).toStrictEqual([1,2,3,4,8,5])
})