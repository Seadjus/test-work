

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = document.querySelectorAll('.header__item-link');
let burgerClsd = document.querySelector('.burger-closed');

burger.addEventListener('click',

  function () {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');

  });

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');
  });


});




document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.call-back-link').addEventListener('click', () => {
    document.querySelector('.call-back-window').classList.add('call-back-window--active')
  })

  document.querySelector('.close-call-back-window').addEventListener('click', () => {
    document.querySelector('.call-back-window').classList.remove('call-back-window--active')
  })
  document.querySelector('.call-back-link').addEventListener('submit', (e) => {
    e.preventDefault()
  });
});




























// let windowCall = document.querySelector('.call-back-link');
// let menuCall = document.querySelector('.call-back-window');
// let windowClsd = document.querySelector('.close-call-back-window');

// windowCall.addEventListener('click',

//   function () {
//     windowCall.classList.toggle('call-back-link');
//     menuCall.classList.toggle('call-back-window--active');
//     document.body.classList.toggle('stop-scroll');
//   });

//   // callLinks.forEach(function (el) {
//   // el.addEventListener('click', function () {
//   //   windowCall.classList.remove('call-back-window--active');
//   //   document.body.classList.remove('stop-scroll');
//   // });


// // });