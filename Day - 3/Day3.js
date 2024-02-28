//! Loops:
//?  A Way To Repeat The Code
//* Types Of Loops:
    //! 1. For loops
    //! 2. While Loops
    //! 3. Do While Loops
    //! 4. For Each Loops
    //! 5. For In Loops
    //! 6. For Of Loops

//!----------------------------------------------------------------

// ! For Loop
//? Simple Sytax of For Loop
// for(let i = 0; i < 10; i++)
// {
//     console.log("Hi From For Loop",i)
// }


//? Reversed For Loop:
// for(let i = 10; i >= 1; i--)
// {
//     console.log(i);
// }


// ? With More Gaps:
// for(let i = 1; i <= 50; i+= 3)
// {
//     console.log(i)
// }

//! Break & Continue:

// for(let i = 0; i < 10;i++)
// {
//     if(i == 5)
//     {
//         break; //? This Will Terminate The Loop In Between
//     }
//     console.log(i);
// }

//! --------------------------

// for(let i = 0; i < 10;i++)
// {
//     if(i == 5 || i == 7)
//     {
//         continue; //? This Will Skip That Itteration Of Loop 
//     }
//     console.log(i);
// }


// ? Playing With Syntax:
//* 1:
// for(let i = 0; i < 10;)
// {
//     console.log(i);
//     i++; 
// }

//* 2
// let  i = 2;
// for(i;;)
// {
//     if(i == 15)
//     {
//         break;
//     }
//     console.log(i);
//     i++; 
// }


//! Practice Problems:
//? 1. Find The Sum on n Natural Numbers...

// let n = 15;
// let sum = 0;

// for(let i = 1; i <= n; i++)
// {
//     sum = sum + i;
// }
// console.log(sum);


//? 2. Find all the Even Numbers Between 2 to N...
// let n = 356;
// for(let i = 2; i <= n; i++)
// {
//     if(i % 2 == 0 )
//     {
//         console.log(i);
//     }
// }



//? 3. Find the Greatest Divisor of a Number:

// let n = 12;
// let maxD = n;
// for(let i = 2; i < n; i++)
// {
//     if(n % i == 0)
//     {
//         maxD = i;
//     }
// }

// console.log(maxD);


//? 4. Check if a number is Prime or Composite:

let n = 4476767476;

let isPrime = true;

for(let i = 2; i < n; i++)
{
   if(n % i == 0)
   {
    
        isPrime = false;
        break;

   }
}


if(isPrime)
{
    console.log("Prime Number");
}

else{
    console.log("Not Prime Number");
}