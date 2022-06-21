$( ".show" ).on( "click", function() {
    var img=$(this).clone()
    img.appendTo($(".modal-body"));
    $("#myModal").css("display","block");
    $(".home").css("display","none");
    $( ".modal-body" ).css( {"height": "100vh" ,   "background-color": "black" ,  "display": "flex",    "justify-content": "center", "align-items": "center"});

  
    
})
$( ".modal" ).on( "click", function() {
    $("#myModal").css("display","none");
    $(".home").css("display","flex");
    $(".modal-body").empty();
})


