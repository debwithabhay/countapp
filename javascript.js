count=0;

let countdisplay = document.getElementById("count");
let increase = document.getElementById("inc");
let decrease = document.getElementById("dec");
let reset = document.getElementById("res");

increase.addEventListener("click", () =>  {
  count++;

   countdisplay.textContent = count;

});

decrease.addEventListener("click", () =>  {
   count--;

   countdisplay.textContent = count;

});

reset.addEventListener("click", () =>  {
   count = 0;

   countdisplay.textContent = count;

});
