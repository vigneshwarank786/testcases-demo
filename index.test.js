// import add from './index';

const add=require('./index')

test("add two number",()=>{
    expect(add(2,2)).toBe(4)
})
