/*    JavaScript 7th Edition
      Chapter 2
      Project 02-03

      Application to return the shape of a clicked object
      Author: 
      Date:   

      Filename: project02-03.js
 */
document.getElementById("square").onmouseover=function() { document.getElementById("feedback").innerHTML="You are hovering over square";}

document.getElementById("circle").onmouseover=function(){document.getElementById("feedback").innerHTML="You are hovering over circle";}

document.getElementById("triangle").onmouseover=function(){document.getElementById("feedback").innerHTML="You are hovering over triangle";}