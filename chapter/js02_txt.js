/*    JavaScript 7th Edition
      Chapter 2
      Chapter case

      Fan Trick Fine Art Photography
      Variables and functions
      Author: 
      Date:   

      Filename: js02.js
 */
const employee=100;
const travel=2;
const photobook=350;
const rights=1250;

window.addEventListener("load",fun);

function fun() {

      document.getElementById("photoNum").value=1;
      document.getElementById("photoHrs").value=2;
      document.getElementById("photoDist").value=0;
      document.getElementById("makeBook").checked=false;
      document.getElementById("photoRights").checked=false;

      estimateCost();

      document.getElementById("photoNum").onchange =estimateCost;
      document.getElementById("photoHrs").onchange =estimateCost;
      document.getElementById("photoDist").onchange =estimateCost;
      document.getElementById("makeBook").onchange =estimateCost;
      document.getElementById("photoRights").onchange=estimateCost;
}

function estimateCost() {
      let cst = 0;
      let employ = document.getElementById("photoNum").value;
      let wrkhrs = document.getElementById("photoHrs").value;
      let dist = document.getElementById("photoDist").value;
      let makeBook = document.getElementById("makeBook").checked;
      let rght = document.getElementById("photoRights").checked;

      cst += employ* wrkhrs* employee;
      cst += employ * travel * dist;
      cst += makeBook ? photobook : 0;
      cst += rght ? rights : 0;


      document.getElementById("estimate").innerHTML="$" + cst;
}