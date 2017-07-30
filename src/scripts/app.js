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
