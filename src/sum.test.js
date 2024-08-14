import sum from "./sum";

test("Unit testing for Sum",()=>{
    let a=20;
    let b=20;
    let output=40;
    expect(sum(a,b)).toBe(output)
});

test("Unit testing for Sum",()=>{
    let a=200;
    let b=200;
    let output=400;
    expect(sum(a,b)).toBe(output)
});