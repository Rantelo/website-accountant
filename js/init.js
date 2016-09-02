var submitted= false;
(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('#gform').on('submit', function(e) {
      $('#gform').prepend('Your submission has been processed...');
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space
