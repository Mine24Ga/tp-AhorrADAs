/************************************************************                           OBTENER ELEMENTO DEL DOM CON EL ID.******************************************************************/
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

/*---------------------------------------------- REPORTES --------------------------------- */
const noReports = document.getElementById("no-reports");
const withReports = document.getElementById("with-reports");
const summaryReport = document.getElementById("report-summary");
const totalCategoryReport = document.getElementById("total-category-reports");
const totalMonthReport= document.getElementById("total-month-reports");
const reportList = document.getElementById("report-list");


/********************************************************************************************* 
                                       EVENTOS 
**********************************************************************************************/

/*Este evento se utiliza para mostrar y ocultar un menú de navegación al hacer clic en un botón con el ícono de una hamburguesa. Al hacer clic en el botón, se agrega la clase "is-active" al botón y al menú de navegación, lo que hace que se muestren en pantalla. Al hacer clic de nuevo en el botón, se elimina la clase "is-active" de ambos elementos, lo que hace que se oculten. */
//Menú hamburguesa
menuBurger.addEventListener("click", () => {
  menuBurger.classList.toggle("is-active");
  menuNavbar.classList.toggle("is-active");
});

/*Este evento se utiliza para mostrar la sección de balance cuando el usuario hace clic en el botón de balance. Cuando se hace clic en el botón, se establece la propiedad de visualización de la sección de balance en "block" para mostrarla, y se establece la propiedad de visualización de las otras secciones en "none" para ocultarlas. lo mismo se repite con el resto de las vistas. */
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
  filterDataOperations();
  showReportList(operations);
  
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


// Botón pencil para editar operación
btnEditEdit.addEventListener("click", () => {
  operations[position].descripcion = inputEditDescription.value;
  operations[position].monto = inputEditAmount.value;
  operations[position].tipo = inputEditType.value;
  operations[position].categoria = inputEditCategory.value;
  operations[position].fecha = inputEditDate.value;

  
  localStorage.setItem("storageOperations", JSON.stringify(operations));
  addBalanceOperation(operations);
  balanceHTML(operations);
  filterDataOperations();

  
  //volver a la vista de balance
  sectionBalance.style.display = 'block';
  sectionEditOperation.style.display = 'none'
});


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

//actualizar el nombre de una categoría en el almacenamiento local. Cuando el usuario hace clic en el botón EditCategory, el nombre de la categoría se actualiza con el valor del campo de entrada EditCategory. Luego, se almacena la nueva categoría en el almacenamiento local y se muestra la sección de categorías. 
//Botón editar categorías
btnEditCategory.addEventListener("click", () => {
  categories[index].name = inputEditCategory.value;
  localStorage.setItem("categorias", JSON.stringify(categories));

  addHtmlCategories(categories);
  setCategoriesBySelect(categories);
  addBalanceOperation(operations);
  balanceHTML(operations);
 
  sectionEditCategory.style.display = 'none'
  sectionCategory.style.display = 'block'
});

// Cuando se hace clic en el botón, se ejecuta la función addBalanceOperation para actualizar las operaciones y se oculta la sección de edición de categorías, mostrando la sección de categorías. 
//Botón eliminar categorías
btnCancelEditCategory.addEventListener('click', () => {
  addBalanceOperation(operations);
  balanceHTML(operations);

  sectionEditCategory.style.display = 'none'
  sectionCategory.style.display = 'block'
});


/********************************************************************************************
                                     FUNCIONALIDADES                                     
 *******************************************************************************************/

/*-------------------------------------- OPERACIONES ----------------------------------------*/
//Esta función se utiliza para obtener la fecha actual en un formato específico (AAAA-MM-DD). 
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

//La función generateId() se utiliza para generar un identificador único. Esto se hace combinando un valor aleatorio generado con el tiempo actual.
const generateId = () => {
  let p1 = Math.floor(Math.random() * 0x10000);
  let p2 = new Date().getTime();
  return `${p1}${p2}`;
};

let categories = [
  { id: 0, name: "Servicios" },
  { id: 1, name: "Trasporte" },
  { id: 2, name: "Educación" }, 
  { id: 3, name: "Salario" },
  { id: 4, name: "Comida" },
  { id: 5, name: "Salidas" },
];


//Formulario para agregar nueva operacion
const resetForm = () => {
  inputDescription.value = "";
  inputAmount.value = 0;
  inputType.value = "gasto";
  selectCategories.value = categories[0].name;
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

/*Esta función es un evento listener que se ejecuta cuando el usuario hace click en el botón "Agregar". Esto desencadena una serie de acciones, como la generación de un ID, el almacenamiento de los datos de la operación en el almacenamiento local, la actualización del balance de la operación y la actualización de la interfaz de usuario. Finalmente, regresa a la vista de balance ocultando la vista de nueva operación. */
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
  filterDataOperations(takeOperations);
  

  //Volver a la vista de Balance
  sectionBalance.style.display = 'block'
  sectionNewOperation.style.display = 'none' 
});

/*Esta función se utiliza para mostrar las operaciones realizadas en una cuenta, recibe como parámetro el array de operaciones y genera una tarjeta por cada una de ellas mostrando los detalles de la operación (descripción, tipo, categoría, monto y fecha). Además, incluye 2 botones para editar y eliminar la operación. */
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
            <span class="tag is-info is-light  is-size-6">${operations[i].categoria}</span>
          </div>

          <div class="column is-2-tablet has-text-grey is-hidden-mobile has-text-left-tablet is-size-6">
          ${operations[i].fecha}
          </div>
          
          <div class="column is-2 has-text-right is-size-6 ${operations[i].tipo === 'ganancia' ? 'tag is-primary is-light ' : 'tag is-danger is-light '}"> $${operations[i].monto}
          </div>

          <div class="column is-2-tablet has-text-right">
            <button class="button is-inverted tag is-link is-size-6" onclick="editOperation('${operations[i].id}')"><i class="fas fa-pen"></i></i></button>
            <button class="button is-inverted tag is-danger is-size-6" onclick="deleteOperation('${operations[i].id}')"><i class="fas fa-trash-alt"></i></button>
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

//EDITAR OPERACIONES
/*Esta función editOperation se utiliza para editar los datos de una operación en particular. Cuando se hace clic en el botón Editar operación, los datos de la operación seleccionada se cargan en los campos de la sección Editar operación. Luego, al hacer clic en el botón Editar, estos datos se actualizan con los datos ingresados en los campos. Al final, los datos se almacenan en el almacenamiento local y se vuelve a la vista de balance. */
let position;

const editOperation = (operacion) => {

  sectionBalance.style.display = 'none';
  sectionEditOperation.style.display = 'block'

  position = operations.findIndex((elem) => elem.id === operacion);

  if (inputEditType.value === "gasto") {
    inputEditAmount.value = Number(operations[position].monto) * -1;
  }

  inputEditDescription.value = operations[position].descripcion;
  inputEditAmount.value = operations[position].monto;
  inputEditType.value = operations[position].tipo;
  inputEditCategory.value = operations[position].categoria;
  inputEditDate.value = operations[position].fecha;


  return position;
};

/*Esta función se utiliza para eliminar una operación de una lista de operaciones. Recibe el parámetro operación, busca el índice de la operación en la lista de operaciones, luego elimina la operación de la lista y actualiza el balance de la lista de operaciones. También almacena la lista de operaciones actualizada en el almacenamiento local. */
//Eliminar Operaciones
const deleteOperation = (operacion) => {

  const value = operations.findIndex((elem) => elem.id === operacion);
  
  if (value >= 0) {
    operations.splice(value, 1);
    localStorage.setItem("storageOperations", JSON.stringify(operations));
    addBalanceOperation(operations);
    filterDataOperations();
    balanceHTML(operations);
    
  }
};


/*--------------------------------------- FILTROS ------------------------------------------- */
/*Esta función se utiliza para filtrar un conjunto de operaciones por un tipo específico. Recibe como parámetros el tipo a filtrar y el conjunto de operaciones a filtrar, y devuelve una colección con todas las operaciones que cumplen con el filtro indicado. Lo mismo para el resto */
//Filtro tipo
const filterByType = (tipo, filteredOperations) => {
  const result = filteredOperations.filter((filterOperation) => filterOperation.tipo === tipo);
  return result;
};

//Filtro categoria
const filterByCategory = (categoria, filteredOperations) => {
  const result = filteredOperations.filter((filterOperation) => filterOperation.categoria === categoria);
  return result;
};

//Filtro fecha
const filterByGreaterOrEqualDate= (fecha, filteredOperations) => {
  const result = filteredOperations.filter(
      (filterOperation) => new Date(filterOperation.fecha).getTime() >= new Date(fecha).getTime());
  return result;
};

//Filtro mas reciente/menos reciente
const sortByLessAndMoreRecent = (filterOperation, orden) => {
  let result
  if (orden === 'mas-reciente') {
      result = [...filterOperation].sort((a, b) => a.fecha > b.fecha ? 1 : -1)
  } else {
      result = [...filterOperation].sort((a, b) => a.fecha < b.fecha ? 1 : -1)
  }
  return result
}

//Filtro menor monto/mayor monto
const sortByMajorAndMinorAmount = (filterOperation, orden) => {
  let result
  if (orden === 'mayor-monto') {
      result = [...filterOperation].sort((a, b) => a.monto < b.monto ? 1 : -1)
  } else {
      result = [...filterOperation].sort((a, b) => a.monto > b.monto ? 1 : -1)
  }
  return result
};

//Filtro orden alfabetico A-Z/Z-A
const sortFromAzAndZa = (filterOperation, orden) => {
  let result
  if (orden === 'a-z') {
      result = [...filterOperation].sort((a, b) => a.descripcion > b.descripcion ? 1 : -1)
  } else {
      result = [...filterOperation].sort((a, b) => a.descripcion < b.descripcion ? 1 : -1)
  }
  return result
};

/* Esta función se utiliza para filtrar y ordenar un conjunto de operaciones. Recibe los parámetros de filtro (tipo, categoría, fecha y orden) y los aplica al conjunto de operaciones para devolver un conjunto de operaciones filtradas y ordenadas. Al final, se llama a la función addBalanceOperation para actualizar el balance con las operaciones filtradas.*/
const filterDataOperations = () => {
  const tipo = filterType.value;
  const categoria = selectFilterCategories.value;
  const fecha = filterDate.value;
  const orden = filterSort.value;

  let filteredOperations = [...operations];

  if (tipo !== 'Todos') {
    filteredOperations = filterByType(tipo, filteredOperations);
  }

  if (categoria !== 'Todos') {
    filteredOperations = filterByCategory(categoria,filteredOperations);
  }

  filteredOperations = filterByGreaterOrEqualDate(fecha, filteredOperations);

  switch (orden) {
    case 'mas-reciente':
      filteredOperations = sortByLessAndMoreRecent(filteredOperations, 'mas-reciente')
        break;
    case 'menos-reciente':
      filteredOperations = sortByLessAndMoreRecent(filteredOperations, 'menos-reciente')
        break;
    case 'menor-monto':
      filteredOperations = sortByMajorAndMinorAmount(filteredOperations, 'menor-monto')
        break;
    case 'mayor-monto':
      filteredOperations = sortByMajorAndMinorAmount(filteredOperations, 'mayor-monto')
        break;
    case 'a-z':
      filteredOperations = sortFromAzAndZa(filteredOperations, 'a-z')
        break;
    case 'z-a':
      filteredOperations = sortFromAzAndZa(filteredOperations, 'z-a')
        break;
    default:
        break;
}

addBalanceOperation(filteredOperations);
balanceHTML(filteredOperations);


}

filterType.addEventListener("change", filterDataOperations);
selectFilterCategories.addEventListener("change", filterDataOperations);
filterDate.addEventListener('change', filterDataOperations);
filterSort.addEventListener('change', filterDataOperations);


/*----------------------------------- BALANCE ---------------------------*/
//Toma una matriz de operaciones como argumento y devuelve un objeto con los totales de ganancias, gastos y el balance total.
const balanceData = (operations) => {
  return operations.reduce(
    (balanceView, operacion) => {
      
      if (operacion.tipo === "ganancia") {
        return {
          ...balanceView,
          ganancia: Number(balanceView.ganancia) + Number(operacion.monto),
          total: Number(balanceView.total) + Number(operacion.monto),
        };
      }
      if (operacion.tipo === "gasto") {
        return {
          ...balanceView,
          gasto: Number(balanceView.gasto) + Number(operacion.monto),
          total: Number(balanceView.total) + Number(operacion.monto),
        };
      }
    },

    {
      ganancia: 0,
      gasto: 0,
      total: 0,
    }
   
  );
};
// Pintar balance
const balanceHTML = (operations) => {
  const objBalance = balanceData(operations);

  balanceTotal.classList.remove("has-text-danger", "has-text-success");

  if (objBalance.total > 0) {
    balanceTotal.classList.add("has-text-success");
  }

  if (objBalance.total < 0) {
    balanceTotal.classList.add("has-text-danger");
  }

  balanceEarnings.innerHTML = `$${objBalance["ganancia"]}`;
  balanceExpense.innerHTML = `$${objBalance["gasto"]}`;
  balanceTotal.innerHTML = `$${objBalance["total"]}`;
};

//muestra el monto de cada operacion individualmente cuando es llamada por los filtros, pero falta acomodar para que muestre la suma total de la tabla de operaciones, y que se muestre al momento de hacer la operacion para no recargar la pagina. 


/*--------------------------------------- CATEGORIAS ----------------------------------------*/
//Añadiendo categorias al local storage
const addCategories = () => {
  if (inputCategory.value != "") {
    categories.push({ id: categories.length, name: inputCategory.value });
    setCategoriesBySelect();
    addHtmlCategories();
    inputCategory.value = "";
  }
  localStorage.setItem('categorias', JSON.stringify(categories))
  categories = JSON.parse(localStorage.getItem('categorias'))
};

//Editar categorías
let index;
const editCategory = (category) => {
  sectionEditCategory.style.display = 'block'
  sectionCategory.style.display = 'none'

  index = categories.findIndex((e) => e.id === Number(category));
  inputEditCategory.value = categories[index].name
  return index
};

//Recibe como parámetro la categoría a eliminar y busca su índice en la lista de categorías. Si el índice existe, se elimina la categoría de la lista y se actualiza el almacenamiento local con la nueva lista de categorías. 
//Eliminar categorías
const removeCategory = (category) => {
  const value = categories.findIndex((e) => e.id == category);
  
  if (value >= 0) {
    categories.splice(value, 1);
   addHtmlCategories();
   setCategoriesBySelect();

    localStorage.setItem("categorias", JSON.stringify(categories));    
  };
};


//Esta función se utiliza para agregar categorías a una lista HTML. Recorre una lista de categorías y genera una sección HTML para cada una de ellas, agregando botones para editar y eliminar cada categoría.
const addHtmlCategories = () => {
  categoryList.innerHTML = "";
  let markCategories= "";
  categories.forEach((category) => {
     
    let nodo =
    `<section class="mb-3">
     <article class="columns is-vcentered is-mobile">
      <div class="column">
          <span class="tag is-info is-light is-size-6">${category.name}</span>
      </div>
      <div class="column is-narrow has-text">
          <a href="#" class="button is-inverted tag is-link is-size-6" onclick="editCategory(${category.id})"><i class="fas fa-pen"></i></i></a>
          <a href="#" class="button is-inverted tag is-danger is-size-6" onclick="removeCategory(${category.id})"><i class="fas fa-trash-alt"></i></a>
          <p></p>
      </div>
      </article>
    </section>`;

    markCategories += nodo;
  });
  categoryList.innerHTML = markCategories;
};

//obtener una lista de categorías guardadas en el almacenamiento local del navegador. Primero, comprueba si hay algo guardado en el almacenamiento local con la clave 'categorías'. Si hay algo guardado, se convierte en un objeto JSON y se devuelve. Si no hay nada guardado, se devuelve una lista vacía.
const categoriesPrint = () => {
  let savedList = localStorage.getItem('categorias');
  
  if (savedList !== null) {
    categories = JSON.parse(savedList)
  } 
  return categories
}
categoriesPrint()

//llenar los elementos HTML selectCategories, selectFilterCategories e inputEditCategory con las categorías almacenadas en el arreglo categories. Esto permite al usuario seleccionar una categoría para filtrar los elementos de la lista.
const setCategoriesBySelect = () => {
  selectCategories.innerHTML = `<option value="Todas">Todas</option>`;
  selectFilterCategories.innerHTML = `<option value="Todas">Todas</option>`;
  inputEditCategory.innerHTML = "";

  for (let i = 0; i < categories.length; i++) {
    const filterCategories = `<option value="${categories[i].name}">${categories[i].name}</option>`
    
    selectFilterCategories.insertAdjacentHTML("beforeend", filterCategories);
    selectCategories.insertAdjacentHTML("beforeend",filterCategories);
    inputEditCategory.insertAdjacentHTML("beforeend", filterCategories);
  };  
};

//Función de carga inicial 
const main = () => {
  setCategoriesBySelect();
  addHtmlCategories ();
  categoriesPrint()
};

main();


/*----------------------------------------- REPORTES ----------------------------------------*/
const addProfit = operations.some(e => e.tipo === 'ganancia');
const subtractProfit = operations.some(e => e.tipo === 'gasto');

//Objeto para almacenar los datos 
let reportingSections = {
  summary: [],
  categoryTotals: [],
  monthTotals: [],
};

//Mostrar y ocultar imagen o lista
const showReportList = (operations) => {
    for (let i = 0; i < operations.length; i++) {
    //Cuando no haya operaciones, ocultar la lista y mostrar imagen.
    if (operations === 0){
      noReports.style.display = 'block'
      withReports.style.display = 'none'
    //Cuando haya operaciones, ocultar imagen y mostrar la lista.
    } else {
      noReports.style.display = 'none'
      withReports.style.display = 'block'
    }
  }};

  //generar un informe. Genera los datos para cada sección del informe (resumen, totales por categoría y totales por mes) y luego genera el informe en sí.
  generateReport = ()=>{
    //inicializamos nuestras secciones de reportes
    reportingSections = {
      summary: [],
      categoryTotals: [],
      monthTotals: [],
    };
    
    //calcular el balance de una categoría de operaciones. Recorre una lista de categorías y luego recorre una lista de operaciones para calcular el gasto y la ganancia de cada categoría. Luego, calcula el balance de cada categoría y lo agrega a una lista de informes generales de categorías. Esta lista se almacena en la sección de informes de categorías totales.
    let generalReportsCategories = [];
    categories.forEach((category) => {
        let itemReport = {
         category: category.name,
         ganancia: 0,
         gasto: 0,
         balance: 0,
        };
        operations.forEach((addBalanceOperation) => {
            if (category.name === addBalanceOperation.categoria) {
                if (addBalanceOperation.tipo === "gasto") {
                    itemReport.gasto += parseFloat(addBalanceOperation.monto);
                }
                if (addBalanceOperation.tipo === "ganancia") {
                    itemReport.ganancia += parseFloat(addBalanceOperation.monto);
            }
        }
    });
    itemReport.balance = itemReport.ganancia - itemReport.gasto;
    generalReportsCategories.push(itemReport);
 });
 reportingSections.categoryTotals = generalReportsCategories;

 let biggerGain = getMaximunValuesCategory("ganancia");
 let biggerExpense = getMaximunValuesCategory("gasto");
 let biggerBalance = getMaximunValuesCategory("balance");
  
//agregar al objeto reportingSections los datos de las categorías con mayor ganancia, gasto y balance. Estos datos se agregan al array summary del objeto reportingSections. Al final de la función se llama a la función paintReport() para pintar el reporte.
 reportingSections.summary.push({
    title: "Categoría con mayor ganancia",
    category: biggerGain.category,
    monto: biggerGain.ganancia,
  });
  reportingSections.summary.push({
    title: "Categoría con mayor gasto",
    category: biggerExpense.category,
    monto: biggerExpense.gasto,
  });
  reportingSections.summary.push({
    title: "Categoría con mayor balance",
    category: biggerBalance.category,
    monto: biggerBalance.balance,
  });
  
  paintReport();
};

//obtener el valor máximo de un campo específico en un conjunto de datos. Por ejemplo, si se pasara el campo "total" a la función getMaximunValuesCategory, devolvería el objeto con el valor máximo de "total" en el conjunto de datos reportingSections.categoryTotals. Lo mismo ocurre con la función getMaximunValuesMonth, que devolvería el objeto con el valor máximo de "total" en el conjunto de datos reportingSections.monthTotals.
const getMaximunValuesCategory = (campo) => {
    return reportingSections.categoryTotals.reduce((prev, current) =>
      prev[campo] > current[campo] ? prev : current
    );
  };

const getMaximunValuesMonth = (campo) => {
    return reportingSections.monthTotals.reduce((prev, current) =>
      prev[campo] > current[campo] ? prev : current
    );
  }; 

  //Esta función se utiliza para generar un informe de categorías, un informe de resumen y un informe mensual. Esta función recorre los datos de los informes de categorías, resumen y mensuales y los agrega al DOM para que el usuario pueda verlos.
  paintReport = () => {
    totalCategoryReport.innerHTML = "";
    reportingSections.categoryTotals.forEach((category) => {
      let node = document.createElement("div");
      node.innerHTML = 
      `<div class="columns has-text-weight-medium is-mobile">
        <div class="column">${category.category}</div>
        <div class="column">${category.ganancia}</div>
        <div class="column">${category.gasto}</div>
        <div class="column">${category.balance}</div>
      </div>`;
      totalCategoryReport.appendChild(node);
    });
  
    summaryReport.innerHTML = "";
    reportingSections.summary.forEach((resumen) => {
      let node = document.createElement("div");
      node.innerHTML = `
      <div class="columns is-mobile">
        <div class="column is-6 has-text-weight-semibold">${resumen.title}</div>
        <div class="column is-3 has-text-right">
          <span class="tag is-info is-light is-medium">${resumen.category}</span>
        </div>
        <div class="column is-3 has-text-weight-semibold has-text-right has-text-success">${resumen.monto}</div>
      </div>
    `;
      summaryReport.appendChild(node);
    });

    totalMonthReport.innerHTML = "";
    reportsPerMonth();
  
    
    reportingSections.monthTotals.forEach((item) => {
    let node = document.createElement("div");
    node.innerHTML = `
    <div class="columns has-text-weight-medium is-mobile">
    <div class="column">${item.mesName}</div>
    <div class="column">${item.ganancia}</div>
    <div class="column">${item.gasto}</div>
    <div class="column">${item.balance}</div>
  </div>
  `;
    totalMonthReport.appendChild(node);
   
  });
  };


  //Esta función se utiliza para generar un informe mensual de ganancias y gastos. Recorre una lista de operaciones y calcula los totales de ganancias y gastos para cada mes. Luego, encuentra el mes con la mayor ganancia y el mes con el mayor gasto. Esta información se almacena en una sección de informes para su uso posterior.
  const reportsPerMonth = () => {
    let monthTotals = [];
    for (let mes = 0; mes <= 12; mes++) {
      let datex = new Date(2021, mes, 04);
      let month = datex.toLocaleString("default", { month: "long" });
      //console.log("EJEMPLO", mes, datex, month);
      let itemReport = {
        mes: mes,
        mesName: month,
        ganancia: 0,
        gasto: 0,
        balance: 0,
      };
      operations.forEach((showOperation) => {
        let date = new Date(showOperation.fecha);
        if (mes === date.getMonth()) {
          if (showOperation.tipo === "gasto") {
            itemReport.gasto += parseFloat(showOperation.monto);
          }
          if (showOperation.tipo === "ganancia") {
            itemReport.ganancia += parseFloat(showOperation.monto);
          }
        }
      });
      itemReport.balance = itemReport.ganancia - itemReport.gasto;
      if (itemReport.ganancia !== 0 || itemReport.gasto !== 0) {
        monthTotals.push(itemReport);
      }
    }
    reportingSections.monthTotals = monthTotals;
 

    let biggerGainMonth = getMaximunValuesMonth("ganancia");
    let biggerExpenseMonth = getMaximunValuesMonth("gasto");
  
    reportingSections.summary.push({
      title: "Mes con mayor ganancia",
      category: biggerGainMonth.mesName,
      monto: biggerGainMonth.ganancia,
    });
    reportingSections.summary.push({
      title: "Mes con mayor gasto",
      category: biggerExpenseMonth.mesName,
      monto: biggerExpenseMonth.gasto,
    });
  };