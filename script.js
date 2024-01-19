document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {
        header.classList.toggle("sticky", window.scrollY > 0);
    });

    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menu.onclick = () => {
        menu.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    }

    window.onscroll = () => {
        menu.classList.remove('bx-x');
        navbar.classList.remove('active');
    }

    const activePage = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a').forEach(link => {
        const linkPath = new URL(link.href).pathname;

        if (linkPath === activePage && !link.parentElement.classList.contains('dropdown-link')) {
            link.classList.add('active');
        } else if (linkPath !== activePage) {
            link.classList.remove('active');
        }
    });
});


