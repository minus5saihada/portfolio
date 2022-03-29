$(function() {
  $('.header__line-wrap').on('click', function () {
    $('.header__line').toggleClass('header__line--open');
    $('.header__menu').toggleClass('header__menu--open');
    $('.header__link').toggleClass('header__link--open');
    $('.header__img').toggleClass('header__img--open');
  });
});
