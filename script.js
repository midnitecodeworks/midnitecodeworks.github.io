// script.js

// Example: Log a message when the page is loaded
window.onload = () => {
    console.log("Website Loaded!");
};

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerHome = document.getElementById('hamburger');
    const navLinksHome = document.getElementById('nav-links');
    const hamburgerAbout = document.getElementById('hamburger-about');
    const navLinksAbout = document.getElementById('nav-links-about');

    if (hamburgerHome && navLinksHome) {
        hamburgerHome.addEventListener('click', () => {
            navLinksHome.classList.toggle('show');
        });
    }

    if (hamburgerAbout && navLinksAbout) {
        hamburgerAbout.addEventListener('click', () => {
            navLinksAbout.classList.toggle('show');
        });
    }
});
