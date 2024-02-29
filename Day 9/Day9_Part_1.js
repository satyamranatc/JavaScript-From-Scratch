// ! Hoisting
// console.log(a); //? This Will Give You A Eroor Bcs It is in Temprary Dead Zone....
// console.log(b); //? Undefined
// console.log("Hi");

// let a = 5;
// var b = 5;

// console.log("Hello");
// console.log(a);
// console.log("Bye")


// *-----------Functions-----------
// ! With Function KeyWord We Can Use The function
// ! Before Initialization
// ! But With let Var --> Err,Undefined

// console.log(Fun)//? Function Definition
// function Fun()
// {
//     console.log("Hi");
// }

// console.log(Gun) //? Error/Temprary Dead Zone
// let Fun = ()=>
// {
//     console.log("Hi");
// }

// console.log(Gun) //? Undefined
// var Fun = ()=>
// {
//     console.log("Hi");
// }


//?  Let Vs Var

var x = 5;
for(let i = 0; i < 10; i++)
{
    x++;
}
console.log(x);

for(let i = 0; i < 10; i++)
{
    // var x = 5;
    let x = 5;
    x++;
}
console.log(x);

