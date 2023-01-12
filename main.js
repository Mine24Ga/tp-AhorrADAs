/*--------------------------------- BOTONES DEL HEADER ------------------------------------*/
const btnBalance = document.getElementById('btn-balance');
const btnCategorias = document.getElementById('btn-categories');
const btnReportes = document.getElementById('btn-reports');
const menuBurger = document.getElementById("navbar-burger");

/*---------------------------------- SECCIONES ------------------------------------------*/
const seccionBalance = document.getElementById('section-balance');
const seccionNuevaOperacion = document.getElementById('section-new-operation');
const seccionEditarOperacion = document.getElementById('section-edit-operation');
const seccionCategorias = document.getElementById('section-category');
const seccionEditarCategoria = document.getElementById('section-edit-category');
const seccionReportes = document.getElementById('section-reports');
const menuNavbar = document.getElementById("navbar-menu");

/*---------------------------------------- BALANCE -----------------------------------------*/
//Sección Balance
const balanceGanancias = document.getElementById("balance-gain");
const balanceGastos = document.getElementById("balance-expense");
const balanceTotal = document.getElementById("balance-total");


/*--------------------------------------- FILTROS --------------------------------------------*/
//Botón para ocultar y mostrar filtros
const btnOcultarFiltros = document.getElementById('btn-hidden-filter');
const filtros = document.getElementById('filters');
//filtros para selecionar 
const filtroTipo = document.getElementById('filter-type');
const selectCategorias = document.getElementById('filter-category');
const filtroFecha = document.getElementById('filter-date');
const filtroOrdenar = document.getElementById('filter-organize');

/*--------------------------------------- OPERACIONES -------------------------------------- */
//Botón nueva operación
const btnNuevaOperacion = document.getElementById('btn-new-operation');
//Tabla de operaciones / sin operaciones
const tablaOperaciones = document.getElementById("operations-table");
const sinOperaciones = document.getElementById("no-operation");
//mostrar en balance 
const mostrarEnBalance = document.getElementById('create-operation');
//Inputs nueva operación
const inputDescripcion = document.getElementById('input-description');
const inputMonto = document.getElementById('input-amount');
const inputTipo = document.getElementById('input-type');

const inputFecha = document.getElementById('input-date');
//Botón para cancelar o agregar en nueva operacion
const btnCancelar = document.getElementById('btn-cancel');
const btnAgregar = document.getElementById('btn-add');

/*------------------------------------- EDITAR OPERACIONES -----------------------------------*/
//Inputs editar operación
const inputEditarDescripcion = document.getElementById('input-description-edit');
const inputEditarMonto = document.getElementById('input-amount-edit');
const inputEditarTipo = document.getElementById('input-type-edit');
const selectEditarCategoria = document.getElementById('category-select-edit');
const inputEditarFecha = document.getElementById('input-date-edit');
//Botones para cancelar o editar en editar operacion
const btnCancelarEditar = document.getElementById('btn-cancel-edit');
const btnEditarOperacion = document.getElementById('btn-edit');

/*---------------------------------------- CATEGORIA --------------------------------------- */
const inputCategoria = document.getElementById('input-category');
const btnAgregarCategoria = document.getElementById('btn-add-category');
const listaCategorias = document.getElementById('categories-list');
//Editar categorias
const inputEditarCategoria = document.getElementById('input-edit-category');
const btnCancelarCategoria = document.getElementById('btn-cancel-edit-category');
const btnEditarCategoria = document.getElementById('btn-edit-category');
const selectCategoriasOperacion = document.getElementById('category-select');

/*---------------------------------------------- REPORTES --------------------------------- */
const sinReportes = document.getElementById("no-reports");
const conReportes = document.getElementById("with-reports");
const reporteResumen = document.getElementById("report-summary");
const reporteTotalCategoria = document.getElementById("total-category-reports");
const reporteTotalMes = document.getElementById("total-month-reports");


_______________________________________________________________________________________________
/*----------------------------------------- EVENTOS ----------------------------------------- */
//Menú hamburguesa
menuBurger.addEventListener("click", () => {
    menuBurger.classList.toggle("is-active");
    menuNavbar.classList.toggle("is-active");
});


//Boton balance
btnBalance.addEventListener('click', () => {
    seccionBalance.style.display = 'block'
    seccionCategorias.style.display = 'none'
    seccionReportes.style.display = 'none'
    seccionNuevaOperacion.style.display = 'none'
    seccionEditarOperacion.style.display = 'none'
    seccionEditarCategoria.style.display = 'none'
  })
  
  //Botón categorias
  btnCategorias.addEventListener('click', () => {
    seccionBalance.style.display = 'none'
    seccionCategorias.style.display = 'block'
    seccionReportes.style.display = 'none'
    seccionNuevaOperacion.style.display = 'none'
    seccionEditarOperacion.style.display = 'none'
    seccionEditarCategoria.style.display = 'none'
  })
  
  //Botón reportes
  btnReportes.addEventListener('click', () => {
    seccionBalance.style.display = 'none'
    seccionCategorias.style.display = 'none'
    seccionReportes.style.display = 'block'
    seccionNuevaOperacion.style.display = 'none'
    seccionEditarOperacion.style.display = 'none'
    seccionEditarCategoria.style.display = 'none'
   
  })


