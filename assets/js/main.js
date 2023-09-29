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

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
    const scrollUp = document.getElementById("scroll-up");
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 350) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

// type writer effect
var typed = new Typed(".second-span", {
    strings: ["Brands.", "Stories.", "Memories."],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true,
});

//fade in banner animation

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

// Function to add animations for slider content
function animateSliderContent() {
    const sr = initializeScrollReveal({
        origin: "left",
        distance: "70px",
        duration: 1000,
        delay: 400,
    });

    function fadeOutSlideContent() {
        const slideContent = document.querySelector(".slide-content");
        slideContent.classList.add("fade-out");
    }

    setTimeout(fadeOutSlideContent, 6000);

    const animateElements = document.querySelectorAll(".animate-element");
    animateElements.forEach((element) => {
        sr.reveal(element);
    });

    sr.reveal(".animate-element", { interval: 500 });
}

let isSwiperInitialized = false;

// Function to initialize Swiper for the slider
function initializeSwiper() {
    if (!isSwiperInitialized) {
        const mySwiper = new Swiper(".swiper-container", {
            autoplay: {
                delay: 5000,
            },
            speed: 1000, // Adjust slide transition speed (in milliseconds)
            slidesPerView: 1, // Number of slides visible at once
            loop: true, // Enable loop mode for continuous sliding
        });
        const videoElements = document.querySelectorAll(".swiper-slide-video");
        videoElements.forEach((video) => {
            video.addEventListener("ended", function () {
                video.currentTime = 0;
                video.play();
            });
        });
        isSwiperInitialized = true;
    }
}
// Use Intersection Observer to detect when the "services" section is visible
const servicesSection = document.getElementById("services");
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            initializeSwiper(); // Initialize Swiper when section is visible
            observer.unobserve(servicesSection); // Stop observing once Swiper is initialized
        }
    });
});
// Start observing the "services" section
observer.observe(servicesSection);

// Function to add animations for contact form
function animateContactForm() {
    const sr = initializeScrollReveal({
        duration: 3000,
        distance: "20px",
        origin: "bottom",
    });

    sr.reveal(".animate-element-from-down", { delay: 200 });
}

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

// Add event listeners to trigger animations on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
    animateBannerElements();
    animateSliderContent();
    initializeSwiper();
    animateContactForm();
    animatePartnerLogos();
});
