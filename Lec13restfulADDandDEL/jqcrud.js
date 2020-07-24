$(function(){
    loadrecipes();
    $("#recipes").on("click", ".btn-danger", handleDelete);
});

function handleDelete(){
    var btn=$(this);
    var parentDiv = btn.closest(".divstyle");
    let id= parentDiv.attr("data-id");
    //console.log(id);
    $.ajax({
        url:"https://usman-recipes.herokuapp.com/api/recipes/"+id,
        method:"DELETE",
        success:function(){
            loadrecipes();
        }
    })
   // console.log("handle delete");
}

function loadrecipes(){
    $.ajax({
        url:"https://usman-recipes.herokuapp.com/api/recipes/",
        method:"GET",
        success: function(response){
            console.log(response);
            var recipes=$("#recipes");
            recipes.empty();
            for (var i=0; i<response.length; i++){
                var rec=response[i];
            //recipes.append("<div><h5>"+ rec.title+ "</h5></div>");
            recipes.append(`<div class="divstyle" data-id="${rec._id}"><h5> ${rec.title} </h5><p>${rec.body} <button class="btn btn-danger btn-sm float-right">Delete recipe</button><button class="btn btn-warning btn-sm float-right">Edit recipe</button></p></div>`);

            }
        }
    });
}
