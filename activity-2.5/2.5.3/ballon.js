


$( "#ballon" ).on( "click", function() {
    var modHeight = 10;
    var modWidth=10;


    if ( $(this).css('background-color')=='rgb(255, 0, 0)'){ 
        $(this).css('background-color', 'green');
        // console.log($(this).css('background-color'))
    }else if ($(this).css('background-color')=='rgb(0, 128, 0)'){
        $(this).css('background-color', 'blue');
    }else{$(this).css('background-color', 'red')
}



    if (( $( this ).height()<420)&&( $( this ).width()<420)){

  $( this ).height( $( this ).height()+(modHeight)).width( $( this ).width()+modWidth ); 
      
    }else{ 
        
        $( this ).height(200 ).width(200);}


    console.log($(this).css('background-color'))  
});

// mouse leaves the ball

$( "#ballon" ).on( "mouseleave", function() {

console.log( $( this ).height())


    if (( $( this ).height()>200)&&( $( this ).width()>200)){

        $( this ).height(($( this ).height())-5  );
        $( this ).width(($( this ).width())-5  ); 
          }else{  
            
            $( this ).height(200 );
            $( this ).width(200);}

            
        if ( $(this).css('background-color')=='rgb(255, 0, 0)'){ 
            $(this).css('background-color', 'blue');
        }else if ($(this).css('background-color')=='rgb(0, 128, 0)'){
            $(this).css('background-color', 'red');
        }else{$(this).css('background-color', 'green')
    }
        });





