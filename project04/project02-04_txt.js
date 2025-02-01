const chicken=10.95;
const hali=13.95;
const hb=9.95;
const gs=18.95;
const ss=7.95;

// Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
   
    return "$" + value.toFixed(2);
 }
 document.addEventListener("DOMContentLoaded", function () {
   let checkbox = document.querySelectorAll("input[type='checkbox']");
   checkbox.forEach((checkbox) => {
       checkbox.addEventListener("change", calcTotal);
   });


   calcTotal();
});

function calcTotal() {
   let cost = 0;
   let ch = document.getElementById("chicken").checked;
   let hb = document.getElementById("halibut").checked;  
   let b = document.getElementById("burger").checked;
   let sl = document.getElementById("salmon").checked;
   let s= document.getElementById("salad").checked;
   
   cost += (ch) ? chicken : 0;
    cost += (hb) ? hali : 0;
    cost += (b) ? hb : 0;
    cost += (sl) ? gs : 0;
    cost += (s) ? ss : 0;  
  const Stax = 0.07
   document.getElementById("foodTotal").innerHTML = formatCurrency(cost);
   
   let taxam = cost * Stax;
   document.getElementById("foodTax").innerHTML = formatCurrency(taxam);
   
   let totalCost = cost + taxam;
   document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);
}