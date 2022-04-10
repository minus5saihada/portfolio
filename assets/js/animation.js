$(function() {
  // About me
  $('.js-tapioca-milk-tea-store-manager').on('inview', function(event, isInView) {
    if (isInView) {
      $(this).addClass('about-me__txt--open');
    } else {
      $(this).removeClass('about-me__txt--open');
    }
  });
  $('.js-arrow-first').on('inview', function(event, isInView) {
    if (isInView) {
      $(this).addClass('about-me__txt--open');
    } else {
      $(this).removeClass('about-me__txt--open');
    }
  });
  $('.js-business-system-engineer').on('inview', function(event, isInView) {
    if (isInView) {
      $(this).addClass('about-me__txt--open');
    } else {
      $(this).removeClass('about-me__txt--open');
    }
  });
  $('.js-arrow-second').on('inview', function(event, isInView) {
    if (isInView) {
      $(this).addClass('about-me__txt--open');
    } else {
      $(this).removeClass('about-me__txt--open');
    }
  });
  $('.js-freelance-web-engineer').on('inview', function(event, isInView) {
    if (isInView) {
      $(this).addClass('about-me__txt--open');
    } else {
      $(this).removeClass('about-me__txt--open');
    }
  });
  // Skills
  $('.js-html-pug').on('inview', function(event, isInView) {
    if (isInView) {
      $(this).addClass('skills__progress-bar--html-pug');
    } else {
      $(this).removeClass('skills__progress-bar--html-pug');
    }
  });
  $('.js-css-sass-bem').on('inview', function(event, isInView) {
    if (isInView) {
      $(this).addClass('skills__progress-bar--css-sass-bem');
    } else {
      $(this).removeClass('skills__progress-bar--css-sass-bem');
    }
  });
  $('.js-javascript-jquery-vue-react').on('inview', function(event, isInView) {
    if (isInView) {
      $(this).addClass('skills__progress-bar--javascript-jquery-vue-react');
    } else {
      $(this).removeClass('skills__progress-bar--javascript-jquery-vue-react');
    }
  });
  $('.js-xd-ai-ps-figma').on('inview', function(event, isInView) {
    if (isInView) {
      $(this).addClass('skills__progress-bar--xd-ai-ps-figma');
    } else {
      $(this).removeClass('skills__progress-bar--xd-ai-ps-figma');
    }
  });
  $('.js-php-laravel').on('inview', function(event, isInView) {
    if (isInView) {
      $(this).addClass('skills__progress-bar--php-laravel');
    } else {
      $(this).removeClass('skills__progress-bar--php-laravel');
    }
  });
  $('.js-java-spring').on('inview', function(event, isInView) {
    if (isInView) {
      $(this).addClass('skills__progress-bar--java-spring');
    } else {
      $(this).removeClass('skills__progress-bar--java-spring');
    }
  });
  $('.js-shellscript').on('inview', function(event, isInView) {
    if (isInView) {
      $(this).addClass('skills__progress-bar--shellscript');
    } else {
      $(this).removeClass('skills__progress-bar--shellscript');
    }
  });
  $('.js-sql').on('inview', function(event, isInView) {
    if (isInView) {
      $(this).addClass('skills__progress-bar--sql');
    } else {
      $(this).removeClass('skills__progress-bar--sql');
    }
  });
  $('.js-docker').on('inview', function(event, isInView) {
    if (isInView) {
      $(this).addClass('skills__progress-bar--docker');
    } else {
      $(this).removeClass('skills__progress-bar--docker');
    }
  });
  $('.js-wordpress').on('inview', function(event, isInView) {
    if (isInView) {
      $(this).addClass('skills__progress-bar--wordpress');
    } else {
      $(this).removeClass('skills__progress-bar--wordpress');
    }
  });
  $('.js-git-github-svn').on('inview', function(event, isInView) {
    if (isInView) {
      $(this).addClass('skills__progress-bar--git-github-svn');
    } else {
      $(this).removeClass('skills__progress-bar--git-github-svn');
    }
  });
  $('.js-gulp-npm-webpack').on('inview', function(event, isInView) {
    if (isInView) {
      $(this).addClass('skills__progress-bar--gulp-npm-webpack');
    } else {
      $(this).removeClass('skills__progress-bar--gulp-npm-webpack');
    }
  });
  $('.js-linux').on('inview', function(event, isInView) {
    if (isInView) {
      $(this).addClass('skills__progress-bar--linux');
    } else {
      $(this).removeClass('skills__progress-bar--linux');
    }
  });
  $('.js-apache-nginx').on('inview', function(event, isInView) {
    if (isInView) {
      $(this).addClass('skills__progress-bar--apache-nginx');
    } else {
      $(this).removeClass('skills__progress-bar--apache-nginx');
    }
  });
});
