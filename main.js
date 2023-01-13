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
const showOnStock = document.getElementById("create-operation");

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

//Botones para editar o eliminar en página balance
const btnEliminarOperacion = document.getElementById('btn-eliminar-operacion');
const btnEditarOperacion = document.getElementById('btn-editar-operacion');

//Botón para ocultar y mostrar los filtros
btnHideFilters.addEventListener('click', () => {
  if (btnHideFilters.innerText === 'Ocultar filtros') {
    btnHideFilters.innerText = 'Mostrar filtros'
    filters.style.display = 'none'
  } else {
    btnHideFilters.innerText = 'Ocultar filtros'
    filters.style.display = 'block'
  }
});


/*-------------------------------------- OPERACIONES ----------------------------------------*/
//Input fecha 
const date = () => {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  return `${year}-${month < 10 ? "0" + month : month}-${
    day < 10 ? "0" + day : day
  }`;
};

inputDate.value = date();
inputEditDate.value = inputDate.value;
filterDate.value = inputDate.value;

//generar id
const generateId = () => {
  let p1 = Math.floor(Math.random() * 0x10000);
  let p2 = new Date().getTime();
  return `${p1}${p2}`;
};


//Formulario para agregar nueva operacion
const resetForm = () => {
  inputDescription.value = "";
  inputAmount.value = 0;
  inputType.value = "gasto";
  selectCategories.value = "";
  inputDate.value = date();
};

//Ocultar y mostrar imagen/tabla
const reviewOperations = (operations) => {
  //Cuando no haya operaciones, ocultar tabla y mostrar imagen.
if (operations == 0){
  operationsTable.style.display = 'none' ;
  noOperations.style.display = 'block' ;
  //Y cuando haya operaciones, ocultar imagen y mostrar tabla  
} else {
  operationsTable.style.display = 'block' ;
  noOperations.style.display = 'none' ;
}
};

let operations = [];
let balanceView = [];


//Botón para agregar operación (despuès de rellenar el formulario)
btnAdd.addEventListener('click', () => {

  const showOperation = {
    id: generateId(),
    descripcion: inputDescription.value,
    monto: inputAmount.value,
    tipo: inputType.value,
    categoria: selectCategories.value,
    fecha: inputDate.value,
  }

  if (showOperation.tipo === "gasto") {
    showOperation.monto = Number(showOperation.monto) * -1;
  }

  operations.push(showOperation);
  localStorage.setItem('storageOperations', JSON.stringify(operations));
  const takeOperations = JSON.parse(localStorage.getItem('storageOperations'));

  resetForm();
  addBalanceOperation(takeOperations);
  balanceHTML(takeOperations);

  //Volver a la vista de Balance
  sectionBalance.style.display = 'block'
  sectionNewOperation.style.display = 'none' 
});


//Mostrar operacion en balance      
const addBalanceOperation = (operations) => {
  showOnStock.innerHTML = '';
  reviewOperations(operations)
  for (let i = 0; i < operations.length; i++) {
    
    const box =

    `
    <div id="${operations[i].id}">
      <div class="mb-3">
        <div class="columns is-multiline is-mobile is-vcentered">
          <div class="column is-3-tablet is-6-mobile">
            <h3 class="has-text-weight-semibold is-size-6">${operations[i].descripcion}</h3>
          </div>

          <div class="column is-3-tablet is-6-mobile has-text-right-mobile">
            <span class="tag is-info is-light is-rounded is-size-6">${operations[i].categoria}</span>
          </div>

          <div class="column is-2-tablet has-text-grey is-hidden-mobile has-text-left-tablet is-size-6">
          ${operations[i].fecha}
          </div>
          
          <div class="column is-2 has-text-right is-size-6 ${operations[i].tipo === 'ganancia' ? 'tag is-primary is-light is-rounded' : 'tag is-danger is-light is-rounded'}"> $${operations[i].monto}
          </div>

          <div class="column is-2-tablet has-text-right">
            <button class="button is-inverted tag is-link is-size-6" onclick="editarOperacion('${operations[i].id}')"><i class="fas fa-pen"></i></i></button>
            <button class="button is-inverted tag is-danger is-size-6" onclick="eliminarOperacion('${operations[i].id}')"><i class="fas fa-trash-alt"></i></button>
          </div>
        </div>
      </div>
    </div>`

    showOnStock.insertAdjacentHTML('beforeend', box)
  }
}

operations = JSON.parse(localStorage.getItem("storageOperations")) ?? operations;
addBalanceOperation(operations);
reviewOperations(operations)