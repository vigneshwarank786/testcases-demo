const week=require('./29js')


test("input week no print the week day",()=>{
    expect(week(3)).toBe("wednesday")
})