// Nav Menu Toggle:
// Documen Content Loader (document.ready):

document.addEventListener("DOMContentLoaded", function (event) {

  var menuIcon = document.querySelector('.hamburger-icon');
  var navSection = document.querySelector('.nav-section');
  menuIcon.addEventListener('click', function () {

    if (navSection.classList.contains('close')) {
      navSection.classList.remove('close');
    } else {
      navSection.classList.add('close');
    }
  }, false);

});
// END of document.ready
