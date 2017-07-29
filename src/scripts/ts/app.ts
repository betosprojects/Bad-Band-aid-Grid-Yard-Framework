// -=-=-=--=-=-==-=-=-=-=-=-=- jQuery START -=-=-=--==-=-=-=-=-=-=-=-=-=-=-=-=-=
// Nav Menu Toggle:

// declare var $:any;

// $(document).ready(function(){

//   $('.hamburger-icon').on('click', function() {
//   if ($('.nav-section').hasClass('close')) {
//   $('.nav-section').removeClass('close');
//   } else {
//   $('.nav-section').addClass('close');
//   }
//   });

// });
//END of document.ready


// -=-=-=-=-=-=-=-=-=-=-=-=- Regular JavaScript =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
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
