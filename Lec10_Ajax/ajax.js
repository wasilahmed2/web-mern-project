
$(function(){

    $("#load").click(sendAjax);
});

function sendAjax(){
    console.log("sending ajax req");

    $.get("student.txt", handle);

    console.log("request sent");

}

function handle(response){
    console.log("response received");
    console.log(response);
}