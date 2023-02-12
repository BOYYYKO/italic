// Burger menu
var toggleButton = document.querySelector('.toggle-menu');
var navBar = document.querySelector('.nav-bar');
toggleButton.addEventListener('click', function () {
	navBar.classList.toggle('toggle');
});

// Card slider
var swiper = new Swiper(".slide-content", {
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        220: {
            slidesPerView: 2,
        },
        440: {
            slidesPerView: 3,
        },
        660: {
          slidesPerView: 4,
        },
        880: {
            slidesPerView: 5,
        },
      },
  });