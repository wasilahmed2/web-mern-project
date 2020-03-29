function handle(){
    console.log("hello");

}
function real(){
  
    var btn= document.getElementById("but");
    btn.onclick=handle;

}

//doBindings("but"); //this doesnt work without page load

window.onload= real;
