//! Do While Loop
// let x = 10;
// do
// {
//     console.log(x);
//     x++;
// }
// while(x < 10);


// ! Nested Loop:
// Loop Inside a Loop


// for(let i = 2; i <= 20; i++)
// {
//     for(let j = 1; j <= 10;j++)
//     {
//         console.log(i,"x",j,"=",i*j);
//     }
//     console.log("------------");
// }



// ? Star Patterns:
//* 1. Box
// let Star = ""
// for(let i = 0; i < 10; i++)
// {
//     for(let j = 0; j < 10; j++)
//     {
//         Star += "* "
//     }
//     Star += "\n";
// }
// console.log(Star);




//* 2:
// * 
// * * 
// * * * 
// * * * * 
// * * * * * 
// * * * * * * 
// * * * * * * * 
// * * * * * * * * 
// * * * * * * * * * 
// * * * * * * * * * * 
// let Star = ""
// for(let i = 0; i < 10; i++)
// {
//     for(let j = 0; j <= i; j++)
//     {
//         Star += "* "
//     }
//     Star += "\n";
// }
// console.log(Star);


//? 3.
// * * * * * * * * * * 
// * * * * * * * * * 
// * * * * * * * * 
// * * * * * * * 
// * * * * * * 
// * * * * * 
// * * * * 
// * * * 
// * * 
// * 
// let Star = ""
// for(let i = 0; i < 10; i++)
// {
//     for(let j = i; j < 10; j++)
//     {
//         Star += "* "
//     }
//     Star += "\n";
// }
// console.log(Star);



//? 4.
// * 
// * * 
// * * * 
// * * * * 
// * * * * * 
// * * * * 
// * * * 
// * * 
// * 
// let Star = ""

// for(let i = 0; i < 5; i++)
// {
//     for(let j = 0; j <=i ;j++)
//     {
//         Star += "* "
//     }
//     Star += "\n";
// }


// for(let i = 0; i <4; i++)
// {
//     for(let j = i; j < 4; j++)
//     {
//         Star += "* "
//     }
//     Star += "\n";
// }



// console.log(Star);




//5. 

// * * * * * 
//  * * * * * 
//   * * * * * 
//    * * * * * 
//     * * * * * 
//     * * * * * 
//    * * * * * 
//   * * * * * 
//  * * * * * 
// * * * * * 

// let Star = ""
// for(let i = 0; i < 5; i++)
// {

//     for(let j = 0; j <= i; j++)
//     {
//         Star += " "
//     }

//     for(let k = 0; k < 5; k++)
//     {
//         Star += "* "
//     }

//     Star += "\n";
// }

// for(let i = 0; i < 5; i++)
// {

//     for(let j = i; j < 5; j++)
//     {
//         Star += " "
//     }

//     for(let k = 0; k < 5; k++)
//     {
//         Star += "* "
//     }

//     Star += "\n";
// }
// console.log(Star);

//? 6.
//            * 
//           * * 
//          * * * 
//         * * * * 
//        * * * * * 
//       * * * * * * 
//      * * * * * * * 
//     * * * * * * * * 
//    * * * * * * * * * 
//   * * * * * * * * * * 
//    * * * * * * * * * 
//     * * * * * * * * 
//      * * * * * * * 
//       * * * * * * 
//        * * * * * 
//         * * * * 
//          * * * 
//           * * 
//            * 


// let n = 10;
// let Star = ""
// for(let i = 0; i < n; i++)
// {
//     for(let j = i; j < n; j++)
//     {
//         Star += " "
//     }
//     for(let k = 0; k <=i; k++)
//     {
//         Star += "* "
//     }
//     Star += "\n";

// }
// for(let i = 0; i < n-1; i++)
// {
//     for(let j = 0; j <= i+1; j++)
//     {
//         Star += " "
//     }
//     for(let k = i; k < n-1; k++)
//     {
//         Star += "* "
//     }
//     Star += "\n";

// }

// console.log(Star)




//? 7.
// * * * * * * * * * * 
// *                 * 
// *                 * 
// *                 * 
// *                 * 
// *                 * 
// *                 * 
// *                 * 
// *                 * 
// * * * * * * * * * * 


// let n = 10;
// let Star = ""
// for(let i = 0; i <n; i++)
// {
//     for(let j= 0 ; j<n;j++)
//     {
//         if(j== 0 || i == 0 || i == n-1 || j == n-1)
//         {
//             Star += "* "
//         }
//         else
//         {
//             Star += "  "
//         }
//     }
//     Star += "\n";
// }
// console.log(Star);


//? 8.
// * * * * * * * * * * * 
// * *               * * 
// *   *           *   * 
// *     *       *     * 
// *       *   *       * 
// *         *         * 
// *       *   *       * 
// *     *       *     * 
// *   *           *   * 
// * *               * * 
// * * * * * * * * * * * 

// let n = 11;

// let Star = ""
// for(let i = 0; i <n; i++)
// {
//     for(let j= 0 ; j<n;j++)
//     {
//         if(j== 0 || i == 0 || i == n-1 || j == n-1 || i == j || j == n-i-1)
//         {
//             Star += "* "
//         }
//         else
//         {
//             Star += "  "
//         }
//     }
//     Star += "\n";
// }
// console.log(Star);




