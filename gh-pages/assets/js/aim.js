// activate bootstrap tooltip

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip({
       animated : 'fade',
       placement : 'top',
       container: 'body'
   });
});
	
		
// sidebar stickyness

function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sidebar-stick').offset().top;
    if (window_top > div_top) {
        $('.sidebar').addClass('stick');
    } else {
        $('.sidebar').removeClass('stick');
    }
}

$(function () {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});


// slide out menu

$( ".navbar-toggle" ).click(function() {
	$("body").toggleClass( "mobile-menu-active", 1000 );
});

// form menu

$( ".current-page" ).click(function() {
	$(".dropdown-area ul").toggleClass( "closed", 1000 );
});


// even out the application items

var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;

 $('.application-item').each(function() {

   $el = $(this);
   topPosition = $el.position().top;
   
   if (currentRowStart != topPosition) {

     // we just came to a new row.  Set all the heights on the completed row
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }

     // set the variables for the new row
     rowDivs.length = 0; // empty the array
     currentRowStart = topPosition;
     currentTallest = $el.height();
     rowDivs.push($el);

   } else {

     // another div on the current row.  Add it to the list and check if it's taller
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);

  }
   
  // do the last row
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
   
 });​