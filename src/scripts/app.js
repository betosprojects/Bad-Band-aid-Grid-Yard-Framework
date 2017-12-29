// DOM Content Loader:
document.addEventListener('DOMContentLoaded', function() {

  // ------------------Nav Menu Toggle:

  var eventClick = document.querySelector('.hamburger-icon');
  var targetSelector = document.querySelector('.nav-section');
  eventClick.addEventListener('click', function() {
    if (targetSelector.classList.contains('toggle')) {
      targetSelector.classList.remove('toggle');
    } else {
      targetSelector.classList.add('toggle');
    }
  }, false);
  // ------------------ END Nav Menu Toggle:





  // ---------------------------- Footer Year:

  var thisYear = new Date();
  document.querySelector("#footYear").innerHTML = thisYear.getFullYear();

  // ------------------------- END Footer Year









});
// END of DOM Content Loader
