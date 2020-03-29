
function calculatee(){

    var a= parseInt(document.querySelector("#val1").value);
    var b= parseInt(document.querySelector("#val2").value);
    var oper= document.querySelector("#op").value;
    var button;

    if(oper=="add") {

        button=a+b;

    }
    else if(oper=="sub") {

        button=a-b;

    }

    else if(oper=="Mul") {

        button=a*b;

    }
   else if(oper=="Div") {

        button=a/b;

    }

    document.querySelector("#result").innerHTML= button;
    

}