// DOM elements
const hamburger = document.querySelector('.hamburger');
const texts = document.querySelectorAll('.text');

// Register scrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Carousel
const swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination'
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  slidesPerView: 1.3,
  spaceBetween: 40,
  loop: true,
  centeredSlides: true
});

// Section text fade-up animation
texts.forEach((text) => {
  gsap.to(text, {
    scrollTrigger: text,
    delay: text.dataset.delay,
    duration: 0.25,
    y: 0,
    opacity: 1,
    ease: Power3.easeIn
  });
});

// Nav animation
let isNavOpen = false;
hamburger.addEventListener('click', (e) => {
  isNavOpen = !isNavOpen;

  if (isNavOpen) {
    openNav();
  } else {
    closeNav();
  }
});

function openNav() {
  let tl = gsap.timeline();

  tl.to('.nav', { duration: 0.8, top: '0', ease: 'expo.inOut' })
    .to('.body-overlay', { display: 'block', ease: 'expo.inOut' }, '-=0.5')
    .to('.header', { duration: 0.01, backgroundColor: 'black' }, '-=0.4')
    .to('.join-btn', { backgroundColor: '#474747' }, 0.1)
    .to('.logo svg path', { fill: 'white' }, 0.1)
    .to('.hamburger .bar', { duration: 0.3, scaleX: 0, ease: 'expo.inOut' }, 0.1, 'hamburger')
    .to(
      '.bar-top',
      { duration: 0.005, y: 2, rotate: '45degree', backgroundColor: 'white', ease: 'expo.inOut' },
      'bar'
    )
    .to(
      '.bar-bottom',
      { duration: 0.005, y: -4, rotate: '-45degree', backgroundColor: 'white', ease: 'expo.inOut' },
      'bar'
    )
    .to('.bar-top', { duration: 0.4, scaleX: 1 }, 'scale')
    .to('.bar-bottom', { duration: 0.4, scaleX: 1 }, 'scale');
}

function closeNav() {
  let tl = gsap.timeline();

  tl.to('.nav', { duration: 0.8, top: '-100%', ease: 'expo.inOut' }, 'navFadeUp')
    .to('.header', { duration: 0.03, backgroundColor: 'white' }, '-=0.4')
    .to('.join-btn', { backgroundColor: 'black' }, 'navFadeUp+=0.3')
    .to('.logo svg path', { fill: 'black' }, 'navFadeUp+=0.3')
    .to(
      '.hamburger .bar',
      { duration: 0.2, scaleX: 0, backgroundColor: 'black', ease: 'expo.inOut' },
      0.1,
      'hamburger'
    )
    .to('.bar-top', { duration: 0.005, y: 0, rotate: '0', ease: 'expo.inOut' })
    .to('.bar-bottom', { duration: 0.005, y: 0, rotate: '0', ease: 'expo.inOut' })
    .to('.bar-top', { duration: 0.4, scaleX: 1 }, 'scale')
    .to('.bar-bottom', { duration: 0.4, scaleX: 1 }, 'scale')
    .to('.body-overlay', { display: 'none', ease: 'expo.inOut' }, '-=1.3');
}
