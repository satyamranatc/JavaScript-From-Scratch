//! Selecting Html Elements In Dom:
// * Basic Targeters:
//? 1. By Id
//? 2. By Class Name
//? 3. By Tag Name

// By ID
let H1 = document.getElementById('Head1');
console.log(H1)

// By Class
let MyPara = document.getElementsByClassName('Para');
console.log(MyPara)

// By Tag
let AllPara = document.getElementsByTagName('p');
console.log(AllPara)


// !----------Changing The Html Content ---------------------
//? 1. Inner HTML
//? 2. Inner Text
//? 3. TextContent


// Inner HTML:
// H1.innerHTML = "<u>Hiiiii</u>"

// Inner Text:
// H1.innerText = "<u>Hiiiii</u>"

// TextContent:
H1.textContent = "Hii"

//* We Have To Give The Index for Class/Tag Name 
AllPara[1].innerHTML = "Hi By Paragraph"
MyPara[1].innerHTML = "Hi By Paragraph"

//!-----Chaning The Entire Element-------

//? Outter HTML:-  Re Write The Whole Tag:

// H1.outerHTML = "<u id = 'Head1'>Hiiiii</u>";
// H1 = document.getElementById("Head1");
// H1.innerText = "Hi By H1";

//!------Changing The Attributes--------
// H1.setAttribute("style","color:red;");
// H1.removeAttribute("style");


//!-----Changing The C.S.S-------
//? 1. Style
//? 2. ClassList

//? Style:
// H1.style.backgroundColor = "White";
// H1.style.color = "red";
// H1.style.fontSize = "40px"



//? ClassList:
console.log(H1.classList)
H1.classList.add("FF");
H1.classList.remove("FF");
H1.classList.replace("Style2", "gg");
// H1.classList.toggle("FF");
console.log(H1.classList.contains("gg"))

// !---------Events In Js--------

//? 1. Html Event Attributes
//? 2. OnEvent Property 
//? 3. EventList Function

//! Common Event List:
//? 1. On Click Event
// *   - Triggered when a user clicks on a specified element.
// ?  Example: element.addEventListener('click', function() { /* your code here */ });

//? 2. On Load Event
// *   - Triggered when the webpage finishes loading.
// ?  Example: window.addEventListener('load', function() { /* your code here */ });

//? 3. On Change Event
// *   - Triggered when the value of a form element changes.
// ?  Example: inputElement.addEventListener('change', function() { /* your code here */ });

//? 4. On Mouse Over Event
// *   - Triggered when the mouse pointer moves over a specified element.
// ?  Example: element.addEventListener('mouseover', function() { /* your code here */ });

//? 5. On Mouse Out Event
// *   - Triggered when the mouse pointer moves out of a specified element.
// ?  Example: element.addEventListener('mouseout', function() { /* your code here */ });

//? 6. On Key Press Event
// *   - Triggered when a key is pressed down and held.
// ?  Example: document.addEventListener('keypress', function() { /* your code here */ });

//? 7. On Submit Event
// *   - Triggered when a form is submitted.
// ?  Example: formElement.addEventListener('submit', function() { /* your code here */ });

//? 8. On Focus Event
// *   - Triggered when an element gains focus.
// ?  Example: inputElement.addEventListener('focus', function() { /* your code here */ });

//? 9. On Blur Event
// *   - Triggered when an element loses focus.
// ?  Example: inputElement.addEventListener('blur', function() { /* your code here */ });

//? 10. On Resize Event
// *    - Triggered when the browser window is resized.
// ?   Example: window.addEventListener('resize', function() { /* your code here */ });
