// const btns_delete = document.querySelectorAll(".delete");
// const btns_edit = document.querySelectorAll(".edit");
const incomplete_tasks = document.getElementById("incomplete-tasks");
const add_button = document.getElementById("add-button");
const new_task = document.getElementById("new-task");
let array_tareas = [];
const tareas = "cosas para hacer";

asignarListenerBtns();
add_button.addEventListener("click", agregarTarea(new_task.value));

function cargaInicial() {
  let storage = localStorage.getItem(tareas);
  console.log(storage)
  if (storage != "" && storage != undefined) {
    array_tareas = storage.split(",");
    console.log(array_tareas)
    if (array_tareas.length > 0) {
      for (let i = 0; i < array_tareas.length; i++) {
        agregarTarea(array_tareas[i]);
      }
    }
  }
}

function agregarTarea(tarea) {
  incomplete_tasks.innerHTML += `
    <li>
    <input type="checkbox" />
    <label>${tarea}</label>
    <input type="text" value="${tarea}"/>
    <button class="edit">
    <i class="fas fa-pen"></i>
    </button>
    <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </li> 
    `;

  manejarStorage(tareas, tarea, "I");
  // tarea = "";

  asignarListenerBtns();
}

function manejarStorage(key, value, op) {
  if (op == "I") {
    array_tareas.push(value);
    localStorage.setItem(key, array_tareas);
  }
}

function asignarListenerBtns() {
  const btns_delete = document.querySelectorAll(".delete");
  btns_delete.forEach((btn) =>
    btn.addEventListener("click", function (e) {
      let elemento_padre = e.target.parentElement.parentElement;
      elemento_padre.remove();
    })
  );

  const btns_edit = document.querySelectorAll(".edit");
  btns_edit.forEach((btn) =>
    btn.addEventListener("click", function (e) {
      let elemento_padre = e.target.parentElement.parentElement;
      let value_input = btn.previousElementSibling.value;
      let label = btn.previousElementSibling.previousElementSibling;
      label.textContent = value_input;
      elemento_padre.classList.toggle("edit-mode");
    })
  );
}
cargaInicial()