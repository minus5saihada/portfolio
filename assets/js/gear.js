$(function() {
  $(window).scroll(function() {
    let offset = $(this).scrollTop();
    if(offset > 0) {
      document.documentElement.style.setProperty('--offset', offset);
      $('.gear__img').addClass('gear__img--scroll');
    } else {
      $('.gear__img').removeClass('gear__img--scroll');
    }
  });
});
