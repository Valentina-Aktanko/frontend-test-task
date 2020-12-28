// Открытие/закрытие меню

let navigation = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

navigation.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navigation.classList.contains('main-nav--closed')) {
    navigation.classList.remove('main-nav--closed');
    navigation.classList.add('main-nav--opened');
  } else {
    navigation.classList.add('main-nav--closed');
    navigation.classList.remove('main-nav--opened');
  }
});

// Подменю
let mainMenu = document.querySelector('.site-list');

mainMenu.addEventListener('click', function(e){
  let navLink = e.target.closest('a');
  if (navLink) {
      navLink.classList.toggle('site-list__link--active');
  }
});
