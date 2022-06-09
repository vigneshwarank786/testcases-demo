const day=require('./10js')

test("day convert in year",()=>{
    expect(day(365)).toStrictEqual({year:1,week:52.142857142857146,days:365})
})