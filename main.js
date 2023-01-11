//Botones del header
const btnBalance = document.getElementById('btn-balance');
const btnCategorias = document.getElementById('btn-categories');
const btnReportes = document.getElementById('btn-reports');
const menuBurger = document.getElementById("navbar-burger");

//Menú hamburguesa

const menuNavbar = document.getElementById("navbar-menu");
menuBurger.addEventListener("click", () => {
    menuBurger.classList.toggle("is-active");
    menuNavbar.classList.toggle("is-active");
});