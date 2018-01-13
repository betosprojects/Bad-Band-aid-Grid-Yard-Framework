// DOM Content Loader:
document.addEventListener('DOMContentLoaded', function () {


// ------------------ Nav Menu Toggle:
const clickItem = document.querySelector('.hamburger-icon');
const targetSection = document.querySelector('.nav-section');

clickItem.addEventListener('click', function () {
targetSection.classList.toggle('toggle-menu');
}, false);
// ------------------ END Nav Menu Toggle:


// ---------------------------- Footer Year:
const serveDate = new Date();

document.querySelector("#footYear").innerHTML = serveDate.getFullYear();
// ------------------------- END Footer Year







});
// END of DOM Content Loader
