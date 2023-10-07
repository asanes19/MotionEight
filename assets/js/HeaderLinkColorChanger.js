function updateNavLinksColor() {
    const header = document.querySelector('.header');
    const navLinks = document.querySelectorAll('.nav__link');

    if (header.classList.contains('scroll-header')) {
        navLinks.forEach(function (link) {
            link.style.color = 'white';
        });
    } else {
        navLinks.forEach(function (link) {
            link.style.color = 'black';
        });
    }
}
window.addEventListener('scroll', updateNavLinksColor);