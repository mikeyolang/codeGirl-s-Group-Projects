# scheduler
*This scheduler allows users to input a task name, date, and time, and adds the task to a list displayed on the page.* <br/>
The `addTask()` function creates a task object with the form inputs, adds the object to the tasks array, updates the task list display with the `displayTasks()` function, and clears the form inputs. <br/> 
The `displayTasks()` function loops through the tasks array and creates an `<li>` element for each task, displaying the task name, date, and time in the element's text content.
