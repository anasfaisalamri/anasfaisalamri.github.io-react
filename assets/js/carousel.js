$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

$(".owl-carousel").owlCarousel({
  loop: false,
  autoplay: false,
  autoplayTimeout: 3000,
  margin: 10,
  nav: false,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    768: {
      items: 2,
      nav: false,
    },
    1199: {
      items: 3,
      nav: false,
    },
  },
});
