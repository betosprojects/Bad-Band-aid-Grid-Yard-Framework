// DOM Content Loader:
document.addEventListener('DOMContentLoaded', function() {
  // ------------------ Nav Menu Toggle:
  const clickItem = document.querySelector('.hamburger-icon');
  const targetSection = document.querySelector('.nav-section');

  clickItem.addEventListener('click', function() {
    targetSection.classList.toggle('js-toggle-menu');
  });

  // ---------------------------- Footer Year:
  let serveDate = new Date();

  document.querySelector('#footYear').innerHTML = serveDate.getFullYear();
});
// END of DOM Content Loader
