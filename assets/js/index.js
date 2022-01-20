let heart = document.querySelector('.header .heart');
let menuBurger = document.querySelector('.menu_burger');
let menuBg = document.querySelector('.header .menu-bg');
let menuModal = document.querySelector('.header .menu-bg-modal');

heart.addEventListener('click', () => {
    heart.classList.toggle('addLike')
});

menuBurger.addEventListener('click', () => {
  menuBurger.classList.toggle('change');
  menuBg.classList.toggle('showMenu');
  menuModal.classList.toggle('showModal');
});