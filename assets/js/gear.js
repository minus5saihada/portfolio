$(function() {
  $(window).scroll(function() {
    let offset = $(this).scrollTop();
    if(offset > 0) {
      document.documentElement.style.setProperty('--offset', offset);
      $('.gear__img').addClass('gear__img--scroll');
    } else {
      $('.gear__img').removeClass('gear__img--scroll');
    }
    // 最下部アニメーション用
    let scrollTop = $(this).scrollTop(); // スクロール量
    let wholeheight = Math.max(document.body.clientHeight, document.body.scrollHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight); // ページ全体の高さ
    let windowHeight = window.innerHeight; // 表示領域の高さ
    let bottomPoint = wholeheight - windowHeight; // 最下部判定用
    let firstGear = $('.gear__img--first').height(); // アニメーション歯車の高さ
    let firstAnimationOffset = wholeheight - firstGear; // 最下層についた際に付与する高さ
    let tenthGear = $('.gear__img--tenth').height(); // アニメーション歯車の高さ
    let tenthAnimationOffset = wholeheight - tenthGear; // 最下層についた際に付与する高さ
    if(scrollTop == bottomPoint) {
      document.documentElement.style.setProperty('--first-animation-offset', firstAnimationOffset);
      document.documentElement.style.setProperty('--tenth-animation-offset', tenthAnimationOffset);
      $('.gear__img--first').addClass('gear__img--first-to-bottom');
      setTimeout(() => {
        $('.gear__img--first').addClass("gear__img--rotate");
      }, 1000);
      $('.gear__img--tenth').addClass('gear__img--tenth-to-bottom');
      setTimeout(() => {
        $('.gear__img--first').addClass("gear__img--gold");
        $('.gear__img--tenth').addClass("gear__img--gold");
        $('.back-to-top').addClass("back-to-top--gold");
      }, 3200);
    } else {
      $('.gear__img--first').removeClass('gear__img--first-to-bottom');
      $('.gear__img--first').removeClass("gear__img--rotate");
      $('.gear__img--tenth').removeClass('gear__img--tenth-to-bottom');
      $('.gear__img--first').removeClass("gear__img--gold");
      $('.gear__img--tenth').removeClass("gear__img--gold");
      $('.back-to-top').removeClass("back-to-top--gold");
    }
  });
  $('.gear__img--first, .gear__img--tenth, .back-to-top').click(function() {
    $('body, html').animate({scrollTop: 0}, 800);
      return false;
  });
});
