$(document).ready(function () {
  $(".hamburger__button, .close__nav, .overlay").click(function (e) {
    const nav = $(".nav__mobile");
    const overlay = $(".overlay");
    const body = $("body, html");

    body.toggleClass("no__scroll");
    overlay.toggleClass("open");
    nav.toggleClass("open");
  });
});
