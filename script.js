// Wait for the entire page content to load before running the script
document.addEventListener('DOMContentLoaded', function () {
    // Step 1: Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Step 2: Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get and clean user input

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Step 3: Create a new <li> element for the task
        const li = document.createElement('li');
        li.textContent = taskText;

        // Step 4: Create a 'Remove' button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-btn");

        // Step 5: When 'Remove' is clicked, delete this task
        removeButton.onclick = function () {
            taskList.removeChild(li);
        };

        // Step 6: Append the button and task to the list
        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Step 7: Clear the input field
        taskInput.value = "";
    }

    // Step 8: Add event listener to "Add Task" button
    addButton.addEventListener('click', addTask);

    // Step 9: Allow adding task with the "Enter" key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
