// create empty array to store tasks
let tasks = [];

// function to add a task
function addTask() {
  // get form inputs
  const taskInput = document.getElementById("task");
  const dateInput = document.getElementById("date");
  const timeInput = document.getElementById("time");

  // create task object with form inputs
  const task = {
    taskName: taskInput.value,
    taskDate: dateInput.value,
    taskTime: timeInput.value,
  };

  // add task object to tasks array
  tasks.push(task);

  // update task list display
  displayTasks();

  // clear form inputs
  taskInput.value = "";
  dateInput.value = "";
  timeInput.value = "";
}

// function to display tasks
function displayTasks() {
  // get task list element
  const taskList = document.getElementById("task-list");

  // clear previous task list display
  taskList.innerHTML = "";

  // loop through tasks and add to task list display
  for (let i = 0; i < tasks.length; i++) {
    const taskItem = document.createElement("li");
    taskItem.textContent =
      tasks[i].taskName + " - " + tasks[i].taskDate + " - " + tasks[i].taskTime;
    taskList.appendChild(taskItem);
  }
}
