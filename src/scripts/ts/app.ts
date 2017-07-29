// Dear future Mr. Forgetsalot me:) --------------------------
// Install it as a Gulp dev-dependencie or globally:
// npm install -g typescript@next or yarn global add typescript@next

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=- jQuery Notes =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Source:
// https://basarat.gitbooks.io/typescript/content/docs/why-typescript.html
// Declared definition for TypeScript to handle Jquery normally.TypeScript expects
// you to declare (i.e. use var somewhere) before you use a variable. As a quick fix
// you can tell TypeScript that there is indeed something called $ :
//

declare var $:any;

// Or this basic example definition to provide more information to help protect you from errors:

// declare var $: {
//   (selector: string): any;
// }

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-Currently Experimenting =-=-=-=-=-=-=-=-=-=-=-
// I used jQuery for the "hamburger" icon to toggle. Paste this on the regular app.js file
// if not using TypScript to compile. Having the framework clean as possible for future use
// or having to use another way or method, that's why I didn't include libraries (yet)..:

$(document).ready(function(){

// --------------------------- Hamburger-Icon Toggle ---------------------------

  $('.hamburger-icon').on('click', function() {
  if ($('.nav-section').hasClass('open')) {
  $('.nav-section').removeClass('open');
  } else {
  $('.nav-section').addClass('open');
  }
  });



});
//END of document.ready




// -=-=-=-=-=-=-=-=-=-=-=-=- Regular JavaScript =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

document.addEventListener('DOMContentLoaded', function(event) {

// JS goes here

});
// END of document.ready
