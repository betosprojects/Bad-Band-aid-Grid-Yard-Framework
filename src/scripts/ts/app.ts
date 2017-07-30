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

document.addEventListener('DOMContentLoaded', function (event) {

    var eventClick = document.querySelector('.hamburger-icon');
    var targetSelector = document.querySelector('.nav-section');
    eventClick.addEventListener('click', function () {
        if (targetSelector.classList.contains('close')) {
            targetSelector.classList.remove('close');
        }
        else {
            targetSelector.classList.add('close');
        }
    }, false);

});
// END of document.ready
