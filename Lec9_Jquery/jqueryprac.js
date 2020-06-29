$(function(){
    //jquery bindings here
    $("#jq").click(button);
    
    $("#todos li").click(delonclick);


});

function delonclick(){
    $(this).remove();
}

function button(){

    var textfield = $("#text").val();

    if(!textfield){
        $("#text").addClass("error");
        return;
        
    }
    $("#text").removeClass("error")
    $("#todos").append("<li>"+ textfield +"</li>")
    $("#text").val(""); //will clear text field
    $("todos li").click(delonclick);

    

}

