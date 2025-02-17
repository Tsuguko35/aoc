$(document).ready(function () {
  $(".hamburger__button, .close__nav, .overlay").click(function (e) {
    const nav = $(".nav__mobile");
    const overlay = $(".overlay");

    overlay.toggleClass("open");
    nav.toggleClass("open");
  });
});
