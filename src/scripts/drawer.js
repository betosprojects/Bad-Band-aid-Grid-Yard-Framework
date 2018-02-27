// ------------------ Yard Hero Drawer:
var clickButton = document.querySelector('.drawer-icon');
var drawerSection = document.querySelector('.js-drawer');
clickButton.addEventListener('click', function() {
  drawerSection.classList.toggle('js-toggle-drawer');
});

