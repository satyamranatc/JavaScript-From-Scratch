// ? Argumets:
function Add(a,b,c = 0)
{
    console.log(a+b+c);
}

Add(1,2,3);
Add(1,2); //? C will be 0 by default

// ! Spread Operators-> (...)

function Add(...nums)
{
    console.log(nums);
}
Add(1,2,3,4,5,6,7,8,9,10); //? All Elements will be converted to array and then passed to nums...


// ! Return:
// ! Used For Fetching Out The Data From Functions To Outside Function

function Fun()
{
    let x = 5;
    console.log("Hi",x);

    return x; //?  This Will return The Value Of x
}

let x = Fun(); //? This is a new Variable which will store the data funtion is returning
console.log(x);

//! --------------------------

