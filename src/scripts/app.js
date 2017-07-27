// Menu icon toggle and crickets `-`-`-`-`-`-`-`-`-`-`-`-`-`-`-`-`-`-`-`

document.addEventListener("DOMContentLoaded", function (event) {



    var menuIcon = document.querySelector('.hamburger-icon');
    var navSection = document.querySelector('.nav-section');
    menuIcon.addEventListener('click', function () {
        if (navSection.classList.contains('open')) {
            navSection.classList.remove('open');
        }
        else {
            navSection.classList.add('open');
        }
    }, false);



});
// END of document.ready 
