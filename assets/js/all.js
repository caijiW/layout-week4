"use strict";

$(document).ready(function () {
  $('.mobileMenu-switch').on('click', function () {
    $('.menu').addClass('open');
    $('.mobileMenu-switch').addClass('d-none');
    $('.mobileMenu-switch').css('display', 'none');
    $('.mobileMenu-close').removeClass('d-none');
  });
  $('.mobileMenu-close').on('click', function () {
    $('.menu').removeClass('open');
    $('.mobileMenu-switch').removeClass('d-none');
    $('.mobileMenu-switch').css('display', 'block');
    $('.mobileMenu-close').addClass('d-none');
  });
  $(window).resize(function () {
    var width = $(window).width() + 17;

    if (width < 768) {
      $('.mobileMenu-switch').removeClass('d-none');
      $('.mobileMenu-switch').css('display', 'block');
    } else {
      $('.mobileMenu-switch').addClass('d-none');
      $('.menu').removeClass('open');
      $('.mobileMenu-close').addClass('d-none');
      $('.mobileMenu-switch').css('display', 'none');
    }
  });
});
//# sourceMappingURL=all.js.map
