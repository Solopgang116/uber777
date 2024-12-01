const menu = document.querySelector('.menu');
const humburger = document.querySelector('.humburger ');

const showMenu = () => {
  menu.classList.toggle('menu__active');
  humburger.classList.toggle('humburger__active');
};

humburger.addEventListener('click', showMenu);
