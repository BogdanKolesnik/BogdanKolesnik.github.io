// Wneh click burger button, adding class .active 
$(document).ready(function() {
  $('.header__nav-menu__burger-button').click(function(event) {
    $('.header__nav-menu__burger-button, .header__burger-nav-menu, .header__nav-menu__burger__logo').toggleClass('active');
    $('body').toggleClass('lock-scroll');
  });
});

// If screen size > 991, removing class .active
$(window).resize(function() {
  var sWidth = $( window ).width();
  if(sWidth > 991) {
    $('.header__nav-menu__burger-button, .header__burger-nav-menu, .header__nav-menu__burger__logo').removeClass('active');
    $('body').removeClass('lock-scroll');
  }
});
