$(document).ready(function() {

    //required inputs 
    $('#nom').on('input', function() {
        var input=$(this);
        var is_name=input.val();
        if(is_name){input.removeClass("invalid").addClass("valid");}
        else{input.removeClass("valid").addClass("invalid");}
    });
    $('#prenom').on('input', function() {
        var input=$(this);
        var is_name=input.val();
        if(is_name){input.removeClass("invalid").addClass("valid");}
        else{input.removeClass("valid").addClass("invalid");}
    });
    $('#date').on('input', function() {
        var input=$(this);
        var is_name=input.val();
        if(is_name){input.removeClass("invalid").addClass("valid");}
        else{input.removeClass("valid").addClass("invalid");}
    });
//after submission validation
$("#submit").click(function(event){
   // var $elements = [];
 //   var form_data=$("#inputs").append($elements);
    var form_data=$("#inputs").serializeArray();
	var error_free=true;
	for (var input in form_data){
		var element=$("#inputs"+form_data[input]['nom']);
		var valid=element.hasClass("valid");
		var error_element=$("span", element.parent());
		if (!valid){error_element.removeClass("error").addClass("error_show"); error_free=false;}
		else{error_element.removeClass("error_show").addClass("error");}
	}
	if (!error_free){
		event.preventDefault(); 
	}
	else{
		alert('No errors: Form will be submitted');
	}
});


    
});





