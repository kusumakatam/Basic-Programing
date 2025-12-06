// Get references to the textarea and buttons so we can interact with them in JavaScript
const notesArea = document.getElementById("notes");
const saveBtn = document.getElementById("save-btn");
const loadBtn = document.getElementById("load-btn");
const clearBtn = document.getElementById("clear-btn");

// When the page loads, we check if localStorage already has saved notes.
// If notes exist, we display them automatically in the textarea.
window.addEventListener("load", function () {
    const savedNotes = localStorage.getItem("userNotes"); // Get stored notes

    if (savedNotes) {
        notesArea.value = savedNotes; // Display notes in textarea
    }
});

// This function runs when the Save button is clicked.
saveBtn.addEventListener("click", function () {
    const text = notesArea.value.trim(); // Read the current text and remove extra spaces

    // Do not allow saving empty notes. This prevents storing blank content.
    if (text === "") {
        alert("Please enter some notes before saving.");
        return;
    }

    // Save the note text in localStorage using the key "userNotes".
    // localStorage keeps the data even after refreshing the page.
    localStorage.setItem("userNotes", text);

    alert("Notes saved successfully.");
});

// This function runs when the Load button is clicked.
// It retrieves the saved notes and displays them in the textarea.
loadBtn.addEventListener("click", function () {
    const savedNotes = localStorage.getItem("userNotes");

    if (savedNotes) {
        notesArea.value = savedNotes;
    } else {
        alert("No saved notes found.");
    }
});

// This function runs when the Clear button is clicked.
// It removes the stored notes from localStorage completely.
clearBtn.addEventListener("click", function () {
    localStorage.removeItem("userNotes"); // Delete saved notes
    notesArea.value = ""; // Clear text area

    alert("Notes cleared.");
});
