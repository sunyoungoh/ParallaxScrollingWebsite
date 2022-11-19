/*============ MENU SHOW Y HIDDEN ============*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

/*============ MENU SHOW ============*/
/* validate if constant exists */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

/*============ MENU HIDDEN ============*/
/* validate if constant exists */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/*============ SCROLL ============*/
let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountain_behind = document.getElementById('mountain_behind');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let mountain_front = document.getElementById('mountain_front');

window.addEventListener('scroll', function () {
  let value = window.scrollY;
  stars.style.left = value * 0.25 + 'px';
  moon.style.top = value * 1.05 + 'px';
  mountain_behind.style.top = value * 0.5 + 'px';
  mountain_front.style.top = value * 0 + 'px';
  text.style.marginRight = value * 4 + 'px';
  text.style.marginTop = value * 1.5 + 'px';
  btn.style.marginTop = value * 1.5 + 'px';
  // header.style.top = value * 0.5 + 'px'
});

/*============= CHANGE BACKGROUND HEADER ============*/
function scrollHeader() {
  const header = document.querySelector('header');
  const home = document.getElementById('home');
  const homeHeight = home.getBoundingClientRect().height;
  const logo = document.getElementById('logo');
  const navMenu = document.getElementById('nav-menu');

  if (window.scrollY > homeHeight) header.classList.add('scroll-header');
  else header.classList.remove('scroll-header');
  if (window.scrollY > homeHeight - 50 && window.innerWidth < 568) {
    logo.classList.add('hide-logo');
    navMenu.classList.add('scroll-nav__menu');
  } else {
    logo.classList.remove('hide-logo');
    navMenu.classList.remove('scroll-nav__menu');
  }
}
window.addEventListener('scroll', scrollHeader);

/*============ SCROLL SECTIONS ACTIVE LINK ============*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 100;
    const sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.add('active');
    } else {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.remove('active');
    }
  });
}
window.addEventListener('scroll', scrollActive);
