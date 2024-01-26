document.addEventListener('DOMContentLoaded', function () {
    // Get the elements
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbar = document.querySelector('.navbar');

    // Toggle the visibility of the navbar on clicking the toggle button
    navbarToggle.addEventListener('click', function () {
        navbar.classList.toggle('show');
        navbarToggle.classList.toggle('active');

        // Close the navbar when the toggle button is clicked again
        if (!navbar.classList.contains('show')) {
            navbarToggle.classList.remove('active');
        }
    });

    // Close the navbar if a link is clicked
    const navbarLinks = document.querySelectorAll('.navbar a');
    navbarLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            navbar.classList.remove('show');
            navbarToggle.classList.remove('active');
        });
    });

    // Close the navbar when the window is resized to a larger size
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            navbar.classList.remove('show');
            navbarToggle.classList.remove('active');
        }
    });
});