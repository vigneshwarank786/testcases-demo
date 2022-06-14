const find=require('./140js')


test("find an array",()=>{
    expect(find(["robin", "vicky", "dhatchu", "siV"])).toBe(1)
})