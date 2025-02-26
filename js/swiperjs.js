  // Function to initialize Swiper after the DOM is fully loaded
  function initializeSwiper() {
    var swiper = new Swiper(".swiper-container.two", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      effect: "coverflow",
      loop: true, 
     autoplay: {
        delay: 1500,
        pauseOnMouseEnter: true, // Assurez-vous que autoplay continue même après une interaction
      },  
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 5,
        stretch: 40,
        depth: 100,
        scale: 0.9,
        modifier: 1,
        slideShadows: false,
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween:0,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 5,
          spaceBetween: -70,
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: "auto",
          spaceBetween: 10,
        },
      },
    });
  }
  initializeSwiper()

  