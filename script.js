let taskInput = document.querySelector(".task-input");
let taskAdd = document.querySelector(".task-add");

let tasks = document.querySelectorAll(".task");

let todoTasks = document.querySelector(".todo-tasks");
let completedTasks = document.querySelector(".completed-tasks");

tasks.forEach((task) => {
  task.addEventListener("click", () => {
    task.classList.add("completed-tasks");
    completedTasks.appendChild(task);
  });
});

checkTasks = () => {
  tasks = document.querySelectorAll(".task");

  tasks.forEach((task) => {
    task.addEventListener("click", () => {
      task.classList.add("completed-tasks");
      completedTasks.appendChild(task);
    });
  });
};

createTask = () => {
  let task = document.createElement("div");
  let taskText = document.querySelector(".task-input");
  task.innerHTML = taskText.value;
  task.classList.add("task");
  todoTasks.appendChild(task);

  taskText.value = "";
};

taskAdd.addEventListener("click", createTask);
taskAdd.addEventListener("click", checkTasks);
