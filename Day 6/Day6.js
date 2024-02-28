// ! Array -> Collection Of Elements....

// let Names = ["Ajay","Sahail","Naman","Jaya"]
// console.log(Names);


let Arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];

// for (let i = 0; i < Arr.length; i++)
// {
//     console.log(Arr[i]);
// }


//? For In Loop Is Used When We Want all Indexes of array From Start To End
// for(let i in Arr)
// {
//     console.log("Element On Index",i,"Is",Arr[i]);
// }


//? For Of Loop Is Used When We Want all Elements of array From Start To End
// for(let i of Arr)
// {
//     console.log("Element Is",i);
// }

//!-------- Basic array Methods:---------

// let arr = [1,2,3,4,5];
// console.log(arr);

// //?1. Push -> Its is used to Insert a new element in Last..
// arr.push(6);
// console.log(arr);

// //?2. Pop -> Its is used to Remove a element From Last..
// arr.pop();
// console.log(arr);


// //?3. Shift -> It Is used To delete the First Element...
// arr.shift();
// console.log(arr);


// //?4. Unshift -> It Is used To Add a new element on the First index...
// arr.unshift(100);
// console.log(arr);

// //?5. Reverse -> It Is used To Reverse the Array...
// arr.reverse();
// console.log(arr);

// //?6. Sort -> It Is used To Sort the Array...
// arr.sort();
// console.log(arr);


// //?7. Slice-> It is Used To Extract the Elements From Middle..
// let Names = ["A","B","C","D","E","F"]
// console.log(Names.slice(1,3));

// //?8. Find About Splice()...


// //?9. toString-> It is used To Convert the Array to a string.
// console.log(arr.toString());


// //?10. Join-> It is used To Merge the Array Elements after converting to a string.
// console.log(arr.join("-"));

//!-----------------Practice-----------------
//*1. Find The Sum of all Elements

// let arr = [1,2,3,4,5];
// let sum = 0;
// for(let i of arr)
// {
//     sum = sum + i;
// }
// console.log(sum);

// *2. Print The Table of All the Even Elements of the Array...
// let arr = [1,2,3,4,5,6,7,8,9,10];
// for(let i of arr)
// {
//     if(i % 2 == 0)
//     {
//         for(let j = 1; j <= 10; j++)
//         {
//             console.log(i*j)
//         }
//         console.log("------")
//     }
// }


//*3. Find The Maximum Element in the Array...
// let arr = [91,22,32,43,95,638,17];
// let MAX = arr[0];

// for(let i of arr)
// {
//     if(i > MAX)
//     {
//         MAX = i;
//     }
// }
// console.log(MAX);


//*4. Find The Factors in the Array...
// let arr = [2,3,4,5,6,7,12,76,2];
// for(let i of arr)
// {
//     let num = ""
//     for(let j of arr)
//     {
//         if(i % j == 0 && i != j )
//         {
//             if(i != 1 && j != 1)
//             {
//                 num += j + ", "
//             }
           
//         }
        
//     }
//     console.log(i ,"->", num);
// }

//*5. Find If a Element is Present Or Not...

let arr = [1,2,3,4,5,6,7,3,2,3,4,5,2,4,2,3];
let Search = 3;

let ElementIndex = -1;

for(let i in arr)
{
    if(Search ==arr[i])
    {
        ElementIndex = i;
        break;
       
    }
}


if(ElementIndex == -1)
{
    console.log("Element Not Found");
}
else
{
    console.log("Element Found at Index",ElementIndex);
}






