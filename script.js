let taskInput = document.querySelector(".task-input");
let taskAdd = document.querySelector(".task-add");

let tasks = document.querySelectorAll(".task");

let todoTasks = document.querySelector(".todo-tasks");
let completedTasks = document.querySelector(".completed-tasks");

checkTasks = () => {
  tasks = document.querySelectorAll(".task");

  tasks.forEach((task) => {
    task.addEventListener("click", () => {
      task.classList.add("completed-tasks");
      completedTasks.appendChild(task);
    });
  });
};

checkCompleted = () => {
  completedTasks = document.querySelectorAll(".completed-tasks");

  completedTasks.forEach((completedTask) => {
    completedTask.addEventListener("click", () => {
      completedTask.classList.remove("completed-tasks");
      todoTasks.appendChild(completedTask);
    });
  });
};

createTask = () => {
  if (taskInput.value === "") {
    alert("Please enter a task.");
    return;
  }

  let task = document.createElement("li");
  let taskText = document.querySelector(".task-input");
  task.innerHTML = taskText.value;
  task.classList.add("task");
  todoTasks.appendChild(task);

  taskText.value = "";
};

taskAdd.addEventListener("click", createTask);
document.addEventListener("keydown", (e) => {
  if (e.key !== "Enter") {
    return;
  } else {
    createTask();
    checkTasks();
  }
});

taskAdd.addEventListener("click", checkTasks);
