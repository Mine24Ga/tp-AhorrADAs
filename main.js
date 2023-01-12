/*--------------------------------- BOTONES DEL HEADER ------------------------------------*/
const btnBalance = document.getElementById("btn-balance");
const btnCategories = document.getElementById("btn-categories");
const btnReports = document.getElementById("btn-reports");
const menuBurger = document.getElementById("navbar-burger");

/*---------------------------------- SECCIONES ------------------------------------------*/
//Contenedores
const sectionBalance = document.getElementById("section-balance");
const sectionNewOperation = document.getElementById("section-new-operation");
const sectionEditOperation = document.getElementById(
  "section-edit-operation"
);
const sectionCategory = document.getElementById("section-category");
const sectionReports = document.getElementById("section-reports");
const sectionEditCategory = document.getElementById("section-edit-category");
const menuNavbar = document.getElementById("navbar-menu");

/*---------------------------------------- BALANCE -----------------------------------------*/
//Sección Balance
const balanceEarnings = document.getElementById("balance-gain");
const balanceExpense = document.getElementById("balance-expense");
const balanceTotal = document.getElementById("balance-total");

/*--------------------------------------- FILTROS --------------------------------------------*/
//Botón para ocultar y mostrar filtros
const btnHideFilters = document.getElementById("btn-hidden-filters");
const filters = document.getElementById("filters");

//filtros para selecionar
const filterType = document.getElementById("filter-type");
const selectFilterCategories = document.getElementById("filter-category");
const filterDate = document.getElementById("filter-date");
const filterSort = document.getElementById("filter-organize");

/*--------------------------------------- OPERACIONES -------------------------------------- */
//Botón nueva operación
const btnNewOperation = document.getElementById("btn-new-operation");

//Tabla de operaciones / sin operaciones
const operationsTable = document.getElementById("operations-table");
const noOperations = document.getElementById("no-operation");

//mostrar en balance
const showOnStock = document.getElementById("create-operacion");

//Inputs nueva operación
const inputDescription = document.getElementById("input-description");
const inputAmount = document.getElementById("input-amount");
const inputType = document.getElementById("input-type");
const inputDate = document.getElementById("input-date");

//Botón para cancelar o agregar en nueva operacion
const btnCancel = document.getElementById("btn-cancel");
const btnAdd = document.getElementById("btn-add");

/*------------------------------------- EDITAR OPERACIONES -----------------------------------*/
//Inputs editar operación
const inputEditDescription = document.getElementById(
  "input-description-edit"
);
const inputEditAmount = document.getElementById("input-amount-edit");
const inputEditType = document.getElementById("input-type-edit");
const selectEditCategory = document.getElementById("category-select-edit");
const inputEditDate = document.getElementById("input-date-edit");

//Botones para cancelar o editar en editar operacion
const btnCancelEdit = document.getElementById("btn-cancel-edit");
const btnEditEdit = document.getElementById("btn-edit");

/*---------------------------------------- CATEGORIA ---------------------------------------*/
//categorias
const inputCategory = document.getElementById("input-category");
const btnAddCategory = document.getElementById("btn-add-category");
const categoryList = document.getElementById("categories-list");

//Editar categorias
const inputEditCategory = document.getElementById("input-edit-category");
const btnCancelEditCategory = document.getElementById(
  "btn-cancel-edit-category"
);
const btnEditCategory = document.getElementById("btn-edit-category");
const selectCategories = document.getElementById("category-select");

/*---------------------------------------------- REPORTES --------------------------------- 
const noReports = document.getElementById("no-reports");
const withReports = document.getElementById("with-reports");
const summaryReport = document.getElementById("report-summary");
const totalCategoryReport = document.getElementById("total-category-reports");
const totalMonthReport= document.getElementById("total-month-reports");


_______________________________________________________________________________________________
/*----------------------------------------- EVENTOS -----------------------------------------*/
//Menú hamburguesa
menuBurger.addEventListener("click", () => {
  menuBurger.classList.toggle("is-active");
  menuNavbar.classList.toggle("is-active");
});

//Vistas
//Boton balance
btnBalance.addEventListener("click", () => {
  sectionBalance.style.display = "block";
  sectionCategory.style.display = "none";
  sectionReports.style.display = "none";
  sectionNewOperation.style.display = "none";
  sectionEditOperation.style.display = "none";
  sectionEditCategory.style.display = "none";
});

//Botón categorias
btnCategories.addEventListener("click", () => {
  sectionBalance.style.display = "none";
  sectionCategory.style.display = "block";
  sectionReports.style.display = "none";
  sectionNewOperation.style.display = "none";
  sectionEditOperation.style.display = "none";
  sectionEditCategory.style.display = "none";
});

//Botón reportes
btnReports.addEventListener("click", () => {
  sectionBalance.style.display = "none";
  sectionCategory.style.display = "none";
  sectionReports.style.display = "block";
  sectionNewOperation.style.display = "none";
  sectionEditOperation.style.display = "none";
  sectionEditCategory.style.display = "none";
  
});

//Botón nueva operación
btnNewOperation.addEventListener("click", () => {
  sectionBalance.style.display = "none";
  sectionNewOperation.style.display = "block";
});
//Botón cancelar
btnCancel.addEventListener("click", () => {
  sectionBalance.style.display = "block";
  sectionNewOperation.style.display = "none";
});
//Botón editar-cancelar
btnCancelEdit.addEventListener("click", () => {
  sectionBalance.style.display = "block";
  sectionEditOperation.style.display = "none";
});

/*Botones para editar o eliminar en página balance
const btnEliminarOperacion = document.getElementById('btn-eliminar-operacion');
const btnEditarOperacion = document.getElementById('btn-editar-operation');*/
