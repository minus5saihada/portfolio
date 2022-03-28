$(function() {
  $(window).scroll(function() {
    let offset = $(this).scrollTop() / -5;
    // $('.top-parallax__img').css('transform', 'translateY(' + offset + 'px)' );
    $('.js-floater').eq(0).css('background-position', '0px ' + offset + 'px');
    $('.js-floater').eq(1).css('background-position', '0px ' + offset * 0.85 + 'px');
    $('.js-floater').eq(2).css('background-position', '0px ' + offset * 0.7 + 'px');
    $('.js-floater').eq(3).css('background-position', '0px ' + offset * 0.55 + 'px');
    $('.js-floater').eq(4).css('background-position', '0px ' + offset * 0.4 + 'px');
  });
});
