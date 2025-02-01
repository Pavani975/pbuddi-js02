/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: 
      Date:   

      Filename: project02-02.js
 */
 


let submit=document.getElementById('submit');
submit.onclick=function(){
let nam=document.getElementById('name').value;
let email=document.getElementById('email').value;
let phone=document.getElementById('phone').value;
      if(nam && email && phone){
            window.alert("Thank you");
      }
      else{
            window.alert("Please fill in all fields!");
          
            
      }
      

}
