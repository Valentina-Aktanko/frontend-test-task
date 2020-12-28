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
let navLinks = document.querySelectorAll('.site-list__link');

for (let i = 0; i < navLinks.length; i++) {
  let navLink = navLinks[i];
  let navItem = navLink.parentNode;
  let subMenu = navItem.querySelector('.submenu-list');

  if(subMenu !== null) {
    navLink.addEventListener('click', function() {
      navLink.classList.toggle('site-list__link--active');
    })
  }

}
