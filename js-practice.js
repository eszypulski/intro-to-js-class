//$("button").hover(function() {
 //   $( this );
   // .toggleClass ("active")/;
//});
$(document).ready(function() {
    // Mouse enter event
    $('#myButton').mouseenter(function() {
      $(this).css('background-color', 'magenta');
      $(this).css('color', 'white');
    });

    // Mouse leave event
    $('#myButton').mouseleave(function() {
      $(this).css('background-color', ''); // Reset to the default background color
      $(this).css('color', ''); // Reset to the default text color
    });
  });


  $(document).ready(function() {
     // Scroll to top when the button is clicked
     $('#myButton').click(function() {
        $('html, body').animate({scrollTop : 0}, 800);
        return false;
      });
    });

  