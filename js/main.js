document.addEventListener('DOMContentLoaded', function() {
    const menuHamburguesa = document.querySelector('.menu-hamburguesa');
    const navbar = document.querySelector('.navbar ul');

    menuHamburguesa.addEventListener('click', function() {
        navbar.classList.toggle('open');
    });
});
