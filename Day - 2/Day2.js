//?  If Will Execuute Only When The Condition is True
//?  Otherwise It Won't Be Executed

// ! Age Should Be Greater than 18 For Driving

//* Example 1
// let age = 5;
// if(age >= 18)
// {
//     console.log("Yes You Can Drive")
// }
// else
// {
//     console.log("No You Can't Drive")
// }

//* Example 2:
//!  Even And Odd

// let num = 35;
// if(num % 2 == 0)
// {
//     console.log("Yes It Is Even")
// }
// else
// {
//     console.log("No It Is Odd")
// }


//* Example 3:
// ! Greatest Between Two Numbers
// let num1 = 34;
// let num2 = 3;

// if(num1 > num2)
// {
//     console.log("num1 is greater than num2")
// }
// else
// {
//     console.log("num2 is greater than num1")
// }

// ?-----------Esle If-----------
//! Else If:- When (If) Is Not Executed Then We Will Check For Else If
//!     And If The Else If is Also Not Executed We Will Go To Next Else If If Present Or Execute Else

//* Example 1:
//! Checking The Number Is Divisible By 3 If Not By 2
// let Num = 7;

// if(Num % 2 == 0)
// {
//     console.log("Yes It Is Even")
// }
// else if(Num % 3 == 0)
// {
//     console.log("Yes It Is Divisible By 3")
// }
// else
// {
//     console.log("No It Is Odd and aslo not disible by 3")
// }

//* Example 2:
// ! Marking Grades To Students
// let marks = 65;

// if(marks > 90)
// {
//     console.log("A")
// }
// else if(marks > 80)
// {
//     console.log("B")
// }
// else if(marks > 70)
// {
//     console.log("C")
// }
// else if(marks > 60)
// {
//     console.log("D")
// }
// else if(marks > 50)
// {
//     console.log("E")
// }
// else 
// {
//     console.log("F")
// }

//?------- And & Or With If--------
// ! And(&&) Is Used When we Want To Check All The Conditions Should Be Be Right/True
// ! Or(||) Is Used When we Want To Check If any One The Conditions Should Be Be Right/True


let x = 17;

// ? Or
// if(x % 3 == 0 || x % 5 == 0)
// {
//     console.log("Divisible by 3 or 5")
// }
// else
// {
//     console.log("Not Divisible by 3 or 5")
// }

// ? And
// if(x % 3 == 0 && x % 5 == 0)
// {
//     console.log("Divisible by 3 and 5")
// }
// else
// {
//     console.log("Not Divisible by 3 and 5")
// }

//? ------Nested If-------
// ! The Conditions Will Be Dependent On Any Other Condition

// let num = 5;

// if(num % 3 == 0)
// {
//     console.log("By 3")
//     if(num % 5 == 0)
//     {
//         console.log("By 5")
//     }
//     else
//     {
//         console.log("Not By 5")
//     }
// }
// else
// {
//     console.log("Not By 3")
// }



// ?-----Multiple If-------

let num = 6;

if(num % 2 == 0)
{
    console.log("Even")
}

if(num % 3 == 0)
{
    console.log("Divisible by 3")
}



