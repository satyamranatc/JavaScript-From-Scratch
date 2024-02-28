// ! While Loops:

// let x = 10;
// while(x > 0)
// {
//     console.log(x);
//     x++;
// }

// let x = 1;
// while(x <= 10)
// {
//     console.log(x);
//     x++;
// }


//? Practise:
//*1.  Find The Digit Count of a Number

// let num = 224;
// let count = 0;
// while (num > 0)
// {
//     count++;
//     num = parseInt(num /10);
// }
// console.log(count);

//*2.  Find The Sum of a Number

let num = 224;
let sum = 0;
while (num > 0)
{
    let remainder = num % 10;
    sum = sum + remainder
    num = parseInt(num /10);
}

console.log(sum);












