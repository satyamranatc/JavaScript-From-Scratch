let age = 35;
let Gender = "M";
let TestMarks = 390;// Asuming The Total Marks 400
let Dissbuled = false;

// For Males Scholorship Is Available on 18-26,
// For females Scholorship Is Available Between Gender
// Age Of 15-25
// Marks Should Be 250 For Males
// Marks Should Be 200 For Females

//! ScholorShip Precentage:
//? TestMarks >= 380 -> 90% 
//? TestMarks >= 300 -> 70% 
//? TestMarks >= 200 -> 60% 





if(Gender == "F")
{
    if (age>110 || age < 0)
    {
        console.log("Invalid Age")
    }
    else
    {
        if(age >= 15 && age <= 25)
        {
            if(TestMarks >= 380)
            {
                console.log("90%")
            }
            else if (TestMarks >= 300)
            {
                console.log("70%")
            }
            else if (TestMarks >= 200)
            {
                console.log("60%")
            }
            else
            {
                console.log("You Failed The Test")
            }
        }
        else
        {
            console.log("Sorry age Is not In Range")
        }
    }

}
else if(Gender == "M")
{

    if (age>110 || age < 0)
    {
        console.log("Invalid Age")
    }
    else
    {

        if(age >= 18 && age <= 26)
        {
            if(TestMarks >= 380)
            {
                console.log("90%")
            }
            else if (TestMarks >= 300)
            {
                console.log("70%")
            }
            else if (TestMarks >= 250)
            {
                console.log("60%")
            }
            else
            {
                console.log("You Failed The Test")
            }
        }
        else
        {
            console.log("Age Not In Range")
        }
    }
    
}
else
{
    console.log("Invalid Gender")
}


if (Dissbuled == true)
{
    console.log("Home Tutor")
}
