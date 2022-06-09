const circle=require('./6js')

test("find the radius of circle circum,diameter and  area",()=>{
    expect(circle(4)).toStrictEqual({circum:25.12,diameter:8,area:50.24})
})