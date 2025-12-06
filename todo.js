// Get references to required elements
const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const searchInput = document.getElementById("search-input");
const taskList = document.getElementById("task-list");

// Load tasks from localStorage on page load
let tasks = JSON.parse(localStorage.getItem("todos")) || [];

// Display existing tasks when page loads
window.addEventListener("load", () => {
    renderTasks(tasks);
});

// Add a new task when Add button is clicked
addBtn.addEventListener("click", () => {
    const text = taskInput.value.trim();

    // Prevent adding empty tasks
    if (text === "") {
        alert("Enter a task before adding.");
        return;
    }

    // Create a task object with unique ID, text, and default status
    const newTask = {
        id: Date.now(),
        text: text,
        completed: false
    };

    // Push task into array and save to localStorage
    tasks.push(newTask);
    updateLocalStorage();

    // Clear input field
    taskInput.value = "";

    // Re-render updated list
    renderTasks(tasks);
});

// Function to display tasks on the page
function renderTasks(taskArray) {
    taskList.innerHTML = ""; // Clear list before re-rendering

    taskArray.forEach(task => {
        const li = document.createElement("li");

        // Toggle completed state when clicked
        const textSpan = document.createElement("span");
        textSpan.textContent = task.text;
        if (task.completed) textSpan.classList.add("completed");

        textSpan.addEventListener("click", () => {
            task.completed = !task.completed; // Switch completion status
            updateLocalStorage();
            renderTasks(tasks);
        });

        // Delete button to remove a task
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";

        deleteBtn.addEventListener("click", () => {
            tasks = tasks.filter(t => t.id !== task.id); // Remove task by ID
            updateLocalStorage();
            renderTasks(tasks);
        });

        // Add elements to list item
        li.appendChild(textSpan);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);
    });
}

// Save the updated tasks array to localStorage
function updateLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(tasks));
}

// Real-time search filter
searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();

    // Filter tasks whose text includes search query
    const filtered = tasks.filter(task =>
        task.text.toLowerCase().includes(query)
    );

    renderTasks(filtered);
});
