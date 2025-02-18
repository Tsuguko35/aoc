$(document).ready(function () {
  // HANDLE HEADER SCROLL
  const scrollValue = 400;
  const screenWidth = 1024;
  let lastScrollTop = 0;

  $(window).on("scroll resize", function () {
    var scrollTop = $(window).scrollTop();

    if ($(window).width() >= screenWidth) {
      if (scrollTop > scrollValue && scrollTop > lastScrollTop) {
        $(".header__nav").addClass("scrolled");
      } else {
        $(".header__nav").removeClass("scrolled");
      }
    } else {
      $(".header__nav").removeClass("scrolled");
    }

    lastScrollTop = scrollTop;
  });
});
