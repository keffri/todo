/*** Main DOM Variables ***/

let todoAddInput = document.querySelector(".add-todo");
let todoAddButton = document.querySelector(".add-todo-btn");
let todoList = document.querySelector(".todo-list");
let completedList = document.querySelector(".completed-list");

/*** Create Todo ***/

createTodo = () => {
  let todo = document.createElement("li");
  let todoValue = document.querySelector(".add-todo").value;
  todo.textContent = todoValue;

  if (todoValue === "") {
    return;
  } else {
    todoList.appendChild(todo);
    let deleteButton = document.createElement("span");
    deleteButton.className = "deleteButton";
    deleteButton.textContent = "x";
    todo.appendChild(deleteButton);
  }
  document.querySelector(".add-todo").value = "";

  let todos = document.getElementsByTagName("li");
  for (let i = 0; i < todos.length; i++) {
    todos[i].addEventListener(
      "click",
      (add = () => {
        todos[i].removeEventListener("click", add);
        todos[i].className = "checked";
        completedList.appendChild(todos[i]);
      })
    );
  }

  let deleteButtons = document.getElementsByClassName("deleteButton");
  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", () => {
      let todo = deleteButtons[i].parentElement;
      todo.style.display = "none";
    });
  }
};

/*** Dark Mode ***/

let darkModeSwitch = document.querySelector("input[type=checkbox]");

/*** Event Listeners ***/

todoAddButton.addEventListener("click", createTodo);
