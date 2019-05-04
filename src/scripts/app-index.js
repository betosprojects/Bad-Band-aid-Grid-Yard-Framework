// DOM Content Loader:
document.addEventListener('DOMContentLoaded', function() {

  // ------------------------ Nav Menu Toggle:
  const sectionContainer = document.querySelector('.nav-section');
  const clickItem = document.querySelector('.hamburger-icon');

  clickItem.addEventListener('click', function() {
    sectionContainer.classList.toggle('js-toggle-menu');
  });




  // ---------------------------- Footer Year:
  var serveDate = new Date();
  document.querySelector('#footYear').innerHTML = serveDate.getFullYear();



});
// END of DOM Content Loader
