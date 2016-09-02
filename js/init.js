var submitted= false;
(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('#gform').on('submit', function(e) {
      $('#gform').prepend('¡Gracias por escribirme! Me pondré en contacto contigo pronto');
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space
