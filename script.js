
document.addEventListener;
const form = document.getElementById("dynamic-to-do-list-form");

form.addEventListener("submit", function addTask() {
    e.preventDefault();

    <li>  
document.getElementById("remove-Btn").onClickEvent("click", displayDate);
</li>

    document.getElementById("myBtn").addEventListener("click", displayDate);

    const taskInput = document.getElementById("task-input").value;
    const taskList = document.getElementById("task-list").value; 
const addButton;

    let isValid = true ;
    
document.getElementById("taskInput").addEventListener("click", keypress);
    if (event.key = 'enter'){
        return 'no adding';
    }
        else{
            return addTask;
        }

function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
}
document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
    // Other initialization code
})

// Adjust `addTask` to optionally save tasks to avoid duplication when loading from Local Storage
function addTask(taskText, save = true) {
    // Task creation logic remains the same

    if (save) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }
}

    document.getElementById("task-input error").textContent = "";
    document.getElementById("task-list-error").textContent = "";

    const nameRegex = /^[a-zA-Z]{1,30}$/;
    if (!nameRegex.test(taskInput)) {
        document.getElementById("task-input-error").textContent = 
            "task input must be 1-30 letters.";
        isValid = false;
    }
    if (!nameRegex.test(taskList)) {
        document.getElementById("task-list-error").textContent = 
            "task-list must be 1-30 letters.";
        isValid = false;
    }
    
    if (isValid) {
        alert("Form submitted successfully!");
    }
});
