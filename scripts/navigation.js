const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');
const html = document.querySelector('html');

let navIsOpen = false;

hamburger.addEventListener('click', function () {
  if(!navIsOpen) {
    hamburger.classList.add('change');
    navigation.classList.add('mobile-open');
    html.classList.add('navigation-open');
  }
  else {
    hamburger.classList.remove('change');
    navigation.classList.remove('mobile-open');
    html.classList.remove('navigation-open');
  }

  navIsOpen = !navIsOpen
})
