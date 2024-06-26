const incomplete_tasks = document.getElementById("incomplete-tasks");
const add_button = document.getElementById("add-button");
const new_task = document.getElementById("new-task");
let tareas = [];

window.addEventListener("load", storageTareas);
add_button.addEventListener("click", () => agregarTarea(new_task.value));

function storageTareas() {
  let storage = localStorage.getItem("tareas");
  if (storage != "" || storage != undefined) {
    tareas = storage.split(",");
    console.log(tareas);
    incomplete_tasks.innerHTML = ""
    tareas.forEach((tarea) => {
      armarHTML(tarea);
    });
  }
  asignarListenerBtns();
}

function armarHTML(tarea) {
    if(tarea != ""){
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
    }
  }

function agregarTarea(tarea) {
  armarHTML(tarea)
  manejarStorage("tareas", tarea);
  new_task.value = "";
}

function manejarStorage(key, value) {
  tareas.push(value);
  localStorage.setItem(key, tareas);
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
