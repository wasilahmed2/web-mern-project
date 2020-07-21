$(function(){
    loadrecipes();
})
function loadrecipes(){
    $.ajax({
        url:"https://usman-recipes.herokuapp.com/api/recipes",
        method:"GET",
        success: function(response){
            console.log(response);
            var recipes=$("#recipes");
            recipes.empty();
            for (var i=0; i<response.length; i++){
                var rec=response[i];
            //recipes.append("<div><h5>"+ rec.title+ "</h5></div>");
            recipes.append(`<div class="divstyle"><h5> ${rec.title} </h5><p>${rec.body}  <button class="btn btn-danger btn-sm float-right">Delete recipe</button></p></div>`);

            }
        }
    });
}
