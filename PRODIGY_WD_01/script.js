document.addEventListener("DOMContentLoaded", function () {
    // Placeholder for any future JavaScript functionality
    console.log("JavaScript is linked correctly.");

    // Smooth scroll functionality
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
