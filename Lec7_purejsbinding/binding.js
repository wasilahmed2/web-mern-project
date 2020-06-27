function hello(){
    console.log("kaam kr raha hai");
}

function bind(){
    console.log("PIZZA")
 var but=document.getElementById("add");
 but.onclick=hello;

}

window.onload=bind;