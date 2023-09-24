/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*=============== SHOW SCROLL UP ===============*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)




// type writer effect
var typed = new Typed(".second-span", {
    strings: ["Brands.", "Stories.", "Experiences."],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})

//fade in banner animation

// Initialize ScrollReveal
const sr = ScrollReveal({
    origin: 'left', // Animation from the left
    distance: '20px', // Distance to slide
    duration: 800, // Animation duration (in milliseconds)
    delay: 200, // Delay before animation starts (in milliseconds)
    reset: false, // Resets the animation on exit
  });
  
  // Define the elements you want to animate
  const titleElement = document.querySelector('.bannerTitle');
  const paragraphElement = document.querySelector('.bannerParagraph');
  const listElement = document.querySelector('.bannerList');
  
  // Add the animations to the elements
  sr.reveal(titleElement);
  sr.reveal(paragraphElement, { delay: 400 }); // Delay the paragraph animation
  sr.reveal(listElement, { delay: 600 }); // Delay the list animation
  

  /*=============== scroll reveal fade in ===============*/
const srAuto = ScrollReveal({
    origin: "left",
    distance: "70px",
    duration: 1000,
    delay: 400,
    // reset: true,
});

function fadeOutSlideContent() {
    const slideContent = document.querySelector(".slide-content");
    slideContent.classList.add("fade-out");
}

// Call the fadeOutSlideContent function after 10 seconds (10000 milliseconds)
setTimeout(fadeOutSlideContent, 6000);

const animateElements = document.querySelectorAll(".animate-element");
animateElements.forEach((element) => {
    srAuto.reveal(element);
});

srAuto.reveal(".animate-element", { interval: 500 });


// Initialize Swiper
var swiper = new Swiper('.servicesSlider', {
    slidesPerView: 1, // Number of slides to show at a time
    spaceBetween: 30, // Space between slides
    loop: true, // Enable looping
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
