// function Fun()
// {
//     document.body.setAttribute("class","style1")
// }
// function Fun2()
// {
//     document.body.setAttribute("class","style2")
// }

Day = true;
function Change()
{
    if(Day)
    {
        Day = false;
        document.body.setAttribute("class","style1")
    }
    else{
        Day = true
        document.body.setAttribute("class","style2")
    }
}