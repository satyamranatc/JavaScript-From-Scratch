class A
{
    constructor(a)
    {
        console.log("Hi By A",a)
    }
    x = 5
}

class B extends A
{
    constructor(a)
    {
        console.log("Hi By B",a)
        super(a);
    }
    y = 100
}

let bbj = new B(50);
console.log(bbj.x);
console.log(bbj.y);
