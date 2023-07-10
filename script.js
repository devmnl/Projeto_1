function calculateTip(event) {
  event.preventDefault();
  let bill = document.getElementById("bill").value;
  let servicequal = document.getElementById("serviceQual").value;
  let num0People = document.getElementById("people").value;

  if(bill == "" | servicequal == 0){
      alert("Por favor, preencha os valores")
      return;
  } 

  if(num0People == "" | num0People <= 1) {
    num0People = 1;
    document.getElementById("each").style.display = "none"
}  else {
    document.getElementById("each").style.display = "block"
}

   let total = (bill * servicequal) / num0People;
   total = total.toFixed(2);
   document.getElementById("tip").innerHTML = total;
   document.getElementById("totaltips").style.display = "block"

}

document.getElementById("totaltips").style.display = "none"
document.getElementById("each").style.display = "none"

document.getElementById("tipsform").addEventListener("submit", calculateTip);
