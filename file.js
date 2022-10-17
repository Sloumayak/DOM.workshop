const plusButtons = document.querySelectorAll(".plus");
const quantitieOfItems = document.querySelectorAll(".x");
const minusButtons = document.querySelectorAll(".minus");
const priceOfItems = document.querySelectorAll(".price");
const removeButtons = document.querySelectorAll(".delete");
const card= document.querySelectorAll(".card");
// console.log(removeButtons);
let sumOfTotal = document.querySelector("#sum");
for (let i = 0; i < plusButtons.length; i++) {
  plusButtons[i].addEventListener("click", function (e) {
    quantitieOfItems[i].innerHTML++;
    sumOfTotal.innerHTML =
      Number(sumOfTotal.innerHTML) + Number(priceOfItems[i].innerHTML);
  });
}
 for (let i = 0; i < minusButtons.length; i++) {
    minusButtons[i].addEventListener("click", function (e) {
      console.log(quantitieOfItems[i]);
      if( quantitieOfItems[i].innerHTML>0){
        quantitieOfItems[i].innerHTML--;
        sumOfTotal.innerHTML=Number(sumOfTotal.innerHTML)-Number(priceOfItems[i].innerHTML);
      } }); 
}
function myFunction(y) {
    y.classList.toggle("fa-thumbs-down");
  }
for(let i = 0; i < removeButtons.length; i++) {
removeButtons[i].addEventListener("click", function (e) {
card[i].remove();
sumOfTotal.innerHTML=sumOfTotal.innerHTML-(priceOfItems[i].innerHTML*quantitieOfItems[i].innerHTML); 
// console.log("total=",sumOfTotal.innerHTML);
});


}

