const menuToggle = document.querySelector('.vst-menu__menu-toggle');
const menu = document.querySelector('.vst-menu__menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('is-active');
});
