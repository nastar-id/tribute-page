const navToggle = document.querySelector('#toggle');
const navClose = document.querySelector('#close');
const navItems = document.querySelector('#items');

navToggle.addEventListener('click', function() {
  navItems.classList.add('slide');
});

navClose.addEventListener('click', function() {
  navItems.classList.remove('slide');
});