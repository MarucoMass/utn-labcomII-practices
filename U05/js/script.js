const btns_delete = document.querySelectorAll(".delete");
const btns_edit = document.querySelectorAll(".edit");
const incomplete_tasks = document.getElementById("incomplete-tasks");
const add_button = document.getElementById("add-button");
const new_task = document.getElementById("new-task");

add_button.addEventListener("click", agregarTarea);
asignarListenerBtns();

function agregarTarea() {
  incomplete_tasks.innerHTML += `
    <li>
    <input type="checkbox" />
    <label>${new_task.value}</label>
    <input type="text" value="${new_task.value}"/>
    <button class="edit">
    <i class="fas fa-pen"></i>
    </button>
    <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </li> 
    `;
  new_task.value = "";

  asignarListenerBtns();
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
