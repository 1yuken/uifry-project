import '../scss/style.scss'

const burger = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const body = document.body

if (burger && menu) {
    burger.addEventListener('click', () => {
        burger.classList.toggle('_active');
        menu.classList.toggle('_active');
        body.classList.toggle('_lock');
    })
}

// SWIPER 

const swiper = new Swiper('.homes-slider', {
    slidesPerView: 1,
    spaceBetween: 70,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        768: {
            slidesPerView: 2,
        },
    }
});


// TESTIMONIALS SWIPER

const swiperTestimonials = new Swiper('.testimonials-slider', {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next1',
      prevEl: '.swiper-button-prev1',
    },
  });