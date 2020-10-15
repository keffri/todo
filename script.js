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
    if(todoValue === "") {
        alert("Please enter a todo.")
    } else {
        todoList.appendChild(todo);
    }
    todoValue = "";
    
   
    
}

/*** Dark Mode ***/

let darkModeSwitch = document.querySelector("input[type=checkbox]");


/*** Event Listeners ***/

todoAddButton.addEventListener("click", createTodo);
