const marks=require('./16js')

test("sum of five subjects average and percentage",()=>{
    expect(marks(70,80,90,75,85)).toStrictEqual({per:80,avr:80})
})