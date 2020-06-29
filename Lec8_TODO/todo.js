window.onload= function add(){
    

 var but=document.getElementById("add");
 but.onclick=handleAdd;


};

function handleAdd(){
   var newtodo=document.getElementById("text").value;
   var listval=document.getElementById("todo");
   var textnode=document.createTextNode(newtodo);
   var newLi = document.createElement("li");
   newLi.appendChild(textnode);
   listval.appendChild(newLi); 
   
}