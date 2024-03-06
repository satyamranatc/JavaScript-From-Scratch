let Hours = document.getElementById("Hours");
let Minutes = document.getElementById("Minutes");
let Seconds = document.getElementById("Seconds");

setInterval(() => {
  let MyDate = new Date();

  Hours.innerHTML = MyDate.getHours();
  Minutes.innerHTML = MyDate.getMinutes();
  Seconds.innerHTML = MyDate.getSeconds();
},1000);
