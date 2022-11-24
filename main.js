//Menú hamburguesa
const menuBurger = document.getElementById("navbar-burger");
const menuNavbar = document.getElementById("navbar-menu");
menuBurger.addEventListener("click", () => {
    menuBurger.classList.toggle("is-active");
    menuNavbar.classList.toggle("is-active");
});