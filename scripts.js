/* RESPONSIVE EXAMPLE */

console.log('Welcome to fake.shop');

/* OFFSCREEN MENU TOGGLE */
(function mobileMenu() {
  if (document.querySelector('.menu-icon')) {
    let menuIcon = document.querySelector('.menu-icon')
    menuIcon.addEventListener('click', function() {
      document.body.classList.toggle('menu-active')
    })
  }
  
})();

