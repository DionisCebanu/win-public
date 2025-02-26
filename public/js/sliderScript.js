// var swiper = new Swiper(".slide-content", {
//   scrollAmount: 3,
//   slidesPerGroup: 3,
//   spaceBetween: 25,
//   loop: false,
//   centerSlide: true,
//   fade: true,
//   grabCursor: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//     dynamicBullets: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//       scrollAmount: 1,
//       slidesPerGroup: 1,
//     },
//     520: {
//       slidesPerView: 2,
//       scrollAmount: 1,
//       slidesPerGroup: 1,
//     },
//     950: {
//       slidesPerView: 3.3,
//     },
//   },
// });

// swiper.on("slideChange", function () {
//   var prevButton = document.querySelector(".swiper-button-prev");
//   var nextButton = document.querySelector(".swiper-button-next");

//   if (swiper.isBeginning) {
//     prevButton.classList.remove("show");
//     nextButton.classList.add("show");
//   } else if (swiper.isEnd) {
//     prevButton.classList.add("show");
//     nextButton.classList.add("hidden");
//   } else {
//     prevButton.classList.add("show");
//     nextButton.classList.remove("hidden");
//   }
// });
var swiper = new Swiper(".slide-content", {
  scrollAmount: 3,
  slidesPerGroup: 3,
  spaceBetween: 25,
  loop: false,
  centerSlide: true,
  fade: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      scrollAmount: 1,
      slidesPerGroup: 1,
    },
    520: {
      slidesPerView: 1,
      scrollAmount: 1,
      slidesPerGroup: 1,
    },
    950: {
      slidesPerView: 3.3,
      slidesPerGroup: 3,
    },
  },
});

swiper.on("slideChange", function () {
  var prevButton = document.querySelector(".swiper-button-prev");
  var nextButton = document.querySelector(".swiper-button-next");

  if (swiper.isBeginning) {
    prevButton.classList.remove("show");
    nextButton.classList.add("show");
  } else if (swiper.isEnd) {
    prevButton.classList.add("show");
    nextButton.classList.add("hidden");
  } else {
    prevButton.classList.add("show");
    nextButton.classList.remove("hidden");
  }
});

// Swiper => Partners
document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.partners', {
    slidesPerView: 4, // Show 4 logos at a time
    spaceBetween: 10, // Space between slides
    loop: true, // Enable looping
    centeredSlides: false, // Ensure slides are not centered
    centeredSlidesBounds: true,
    grabCursor: true,
    rewind: true,
    autoplay: {
      delay: 3000, // Delay between slides in milliseconds
      disableOnInteraction: false, // Don't disable autoplay on interaction
    },
    breakpoints: {
      // Responsive breakpoints
      768: {
        slidesPerView: 2, // Show 2 logos at a time on tablets
      },
      480: {
        slidesPerView: 1, // Show 1 logo at a time on mobile
      },
    },
    on: {
      init: function () {
        const swiperContainer = document.querySelector('.partners');
        swiperContainer.addEventListener('mouseenter', () => {
          swiper.autoplay.stop();
        });
        swiperContainer.addEventListener('mouseleave', () => {
          swiper.autoplay.start();
        });
      },
    },
  });
});




