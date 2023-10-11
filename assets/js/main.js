/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById("header");
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 50) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

// Function to initialize ScrollReveal
function initializeScrollReveal(options) {
    return ScrollReveal(options);
}

// Function to add animations for banner elements
function animateBannerElements() {
    const sr = initializeScrollReveal({
        origin: "left",
        distance: "20px",
        duration: 800,
        delay: 200,
        reset: false,
    });

    const titleElement = document.querySelector(".bannerTitle");
    const paragraphElement = document.querySelector(".bannerParagraph");
    const listElement = document.querySelector(".bannerList");

    sr.reveal(titleElement);
    sr.reveal(paragraphElement, { delay: 400 });
    sr.reveal(listElement, { delay: 600 });
}
animateBannerElements();
// Function to add animations for banner elements
function animateAboutUsImg() {
    const sr = initializeScrollReveal({
        origin: "left",
        distance: "70px",
        duration: 1000,
        delay: 400,
    });
    sr.reveal(".animate-from-the-left", { delay: 50 });

}
animateAboutUsImg();

// Function to add animations for contact form
function animateContactForm() {
    const sr = initializeScrollReveal({
        duration: 3000,
        distance: "20px",
        origin: "bottom",
    });

    sr.reveal(".animate-element-from-down", { delay: 200 });
}
animateContactForm();

// Function to add animations for partner logos
function animatePartnerLogos() {
    const sr = initializeScrollReveal({
        duration: 1000,
        origin: "right",
        distance: "20px",
        delay: 200,
    });

    sr.reveal(".partner-logo", { interval: 200 });
}
animatePartnerLogos();

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Initialize Swiper
    const mySwiper = new Swiper(".swiper-container", {
        // autoplay: {
        //     delay: 5000,
        // },
        speed: 1000,
        slidesPerView: 1,
        loop: true,
    });
});




// JavaScript for opening and closing video popup
document.addEventListener("DOMContentLoaded", function () {
    const playIcons = document.querySelectorAll(".play-icon");
    const videoPopups = document.querySelectorAll(".video-popup");
    const closeButtons = document.querySelectorAll(".close-popup");

    playIcons.forEach(function (playIcon, index) {
        const videoPopup = videoPopups[index];
        const closeButton = closeButtons[index];

        // Open video popup when the play icon is clicked
        playIcon.addEventListener("click", function () {
            videoPopup.style.display = "block";
        });

        // Close video popup when the close button is clicked
        closeButton.addEventListener("click", function () {
            videoPopup.style.display = "none";
        });
    });
});

// JavaScript for toggling the 'active' class on click
document.addEventListener("DOMContentLoaded", function () {
    const eachTypes = document.querySelectorAll(".eachType");

    eachTypes.forEach(function (eachType) {
        eachType.addEventListener("click", function () {
            eachType.classList.toggle("active");
        });
    });
});
