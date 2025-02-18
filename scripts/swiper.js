const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  freemode: true,
  spaceBetween: 30,
  looAdditionalSlides: 1,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});
