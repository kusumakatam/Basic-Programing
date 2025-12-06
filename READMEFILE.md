# Enhanced Todo List (L1 Assignment)

## Features
This application is an improved Todo List built with HTML, CSS, and JavaScript. It supports:

• Adding new tasks  
• Marking tasks as completed  
• Removing tasks  
• Real-time search filtering  
• Saving tasks in localStorage  
• Remembering completion status and tasks after page reload  

## How It Works

### 1. Adding Tasks
Type a task in the input box and click "Add Task".  
The task is stored as an object with:
- id: A unique number (timestamp)
- text: The task content
- completed: true or false

### 2. Marking Tasks Completed
Click on a task to toggle its completed state.  
Completed tasks appear crossed out.

### 3. Deleting Tasks
Click the "X" button next to a task to remove it.

### 4. Searching Tasks
The search bar filters tasks in real time.  
Only tasks that match the search text are shown.

### 5. Data Persistence
All tasks are saved in localStorage under the key `"todos"`.  
Tasks reappear even after refreshing or reopening the page.

## Files Included
- `index.html` → User interface
- `style.css` → Styles for the Todo list
- `script.js` → Logic for adding, deleting, searching, and saving tasks
- `README.md` → Explanation and usage guide (this file)

## How to Run
1. Download or clone the repository.  
2. Open `index.html` in your browser.  
3. Your Todo list is ready to use.

