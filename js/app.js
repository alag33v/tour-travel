$(document).ready(function () {
  /* Slick slider */
  $('.testimonials__slider').slick({
    prevArrow:
      '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt=""></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  });
  /* Smooth scroll */
  $('[data-scroll]').on('click', function (evt) {
    evt.preventDefault();

    let elementClass = $(this).data('scroll');
    let elementOffset = $(elementClass).offset().top;

    $('html, body').animate(
      {
        scrollTop: elementOffset,
      },
      1000
    );
  });
  /* Burger menu */
  let wrapper = document.querySelector('.burger__button-wrapper');
  let burger = document.querySelector('.burger__button');
  let mobileNav = document.querySelector('.menu__mobile-nav');
  let mobileLink = document.querySelectorAll('.mobile-nav__link');
  let body = document.querySelector('body');

  wrapper.addEventListener('click', (e) => {
    e.preventDefault();
    burger.classList.toggle('active');
    mobileNav.classList.toggle('menu__mobile-nav--active');
    body.classList.toggle('block');
  });

  for (var i = 0; i < mobileLink.length; i++) {
    mobileLink[i].addEventListener('click', function (evt) {
      evt.preventDefault();
      burger.classList.toggle('active');
      mobileNav.classList.remove('menu__mobile-nav--active');
      body.classList.remove('block');
    });
  }

  /* Pop-up */
  let btnLeft = document.querySelector('.header__btn--left');
  let btnRight = document.querySelector('.header__btn--right');
  let popUp = document.querySelector('.popup');
  let exit = document.querySelector('.exit');

  btnLeft.addEventListener('click', (e) => {
    e.preventDefault();
    popUp.classList.add('popup--active');
  });

  btnRight.addEventListener('click', (e) => {
    e.preventDefault();
    popUp.classList.add('popup--active');
  });

  exit.addEventListener('click', (e) => {
    e.preventDefault();
    popUp.classList.remove('popup--active');
  });

  document.addEventListener('mouseup', (e) => {
    if (e.target.closest('.popup') === null) {
      popUp.classList.remove('popup--active');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.keyCode == 27) {
      popUp.classList.remove('popup--active');
    }
  });
});
