// Accessing the buttons and the container div
const addBtn = document.getElementById("add-btn");
const removeBtn = document.getElementById("remove-btn");
const container = document.getElementById("container");

// This function runs when the Add button is clicked
addBtn.addEventListener("click", function () {
    // Create a new <p> element
    const para = document.createElement("p");

    // Add the required text to the paragraph
    para.textContent = "This is a new paragraph.";

    // Insert the paragraph inside the container div
    container.appendChild(para);
});

// This function runs when the Remove button is clicked
removeBtn.addEventListener("click", function () {
    // Check if there is at least one paragraph to remove
    if (container.lastChild) {
        // Remove the most recently added paragraph
        container.removeChild(container.lastChild);
    }
});
