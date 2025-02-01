
document.getElementById("cValue").onchange=function(){
     let cdeg=document.getElementById("cValue").value;
     document.getElementById("fValue").value=ctof(cdeg);

}
document.getElementById("fValue").onchange=function(){
      let fdeg=document.getElementById("fValue").value;
      document.getElementById("cValue").value=ftoc(fdeg);
 
 } 
function ftoc(deg){
      return (deg-32)/1.8;
}
function ctof(deg){
      return deg*1.8+32;
} 