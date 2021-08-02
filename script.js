const toggleBtn = document.querySelector('nav .toggle-menu');
const navbar = document.querySelector('nav .navbar-nav');

toggleBtn.addEventListener('click', function () {
    navbar.classList.toggle('active');
});