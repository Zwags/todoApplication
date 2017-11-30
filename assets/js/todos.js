//Check off todo's via click
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

//Clicking on X delete's todo's, watch for event bubbling
$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(700, function() {
    $(this).remove();
  });
  event.stopPropagation();
});


$("input[type='text']").keypress(function(event){
    if(event.which === 13 ) {
      //grab new text
    var todoText =  $(this).val();
    $(this).val("");
    //create new li add to ul
    $("ul").append("<li> <span> <i class='fa fa-trash'></i> </span> "+ todoText +"</li>")
    }
});

$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle(400);
});
