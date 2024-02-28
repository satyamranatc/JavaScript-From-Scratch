// ! We Can Store Function In Variables
// let Fun = function()
// {
//     console.log("Hi");
// }

// Fun();

// function x()
// {
//     console.log("Hi");
// }


// function Fun(a)//? A is argument
// {
//     a(); //? Calling a...
// }

// Fun(x); 
//? X Is a Diffrent Function
//? and We Are Passing a Diffrent Function In Variables
//? Fun Function as Argument ..
//! This Concept is called Callbacks


//? a simple example of Callbacks...
//? setInterval() is calling fun function in every 1s/ 1000 ms
// function Fun()
// {
//     console.log("Hi");
// }
// setInterval(Fun,1000);


//? Again a CallBack
// function Fun(a)//? Fun is HOF
// {
//     a()
// }
// Fun(function()
// {
//     console.log("Hi")
// })

// !--------Arrow Function----------
// let a = ()=>
// {
//     console.log("Hi")
// }
// a();

//? The arrow function will retun the statement in front of arrow
let Add = (a,b)=>a+b; //? a+b will be returend
console.log(Add(5,6));


