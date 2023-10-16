
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