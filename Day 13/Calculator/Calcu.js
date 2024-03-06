let Answer_Data = document.getElementById('Answer-Data');
let History_Data = document.getElementById('History-Data');

let Btns = document.getElementsByClassName("Btn");


for (let i of Btns)
{
   i.onclick = (e)=>
   {
    let BtnText = e.target.innerText;
    if (BtnText == "C")
    {
        History_Data.innerText = ""
        Answer_Data.innerText = ""
    }
    else if (BtnText == "=")
    {
        History_Data.innerText = Answer_Data.innerText
        let Result = eval(Answer_Data.innerText);
        Answer_Data.innerText = Result;
        
    }
    else if (BtnText == "x")
    {
        Answer_Data.innerText += "*"
    }else if (BtnText == "÷")
    {
        Answer_Data.innerText += "/"
    }
    else if (BtnText == "x2")
    {
        History_Data.innerText = Answer_Data.innerText + "x" + Answer_Data.innerText
        let Result = eval(Answer_Data.innerText * Answer_Data.innerText);
        Answer_Data.innerText = Result;
    }
    else if (BtnText == "CE")
    {
        Answer_Data.innerText = Answer_Data.innerText.slice(0,-1);
    }
    else
    {
        Answer_Data.innerHTML += BtnText
    }
   }
}