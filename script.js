
const form = document.getElementById("myForm");

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
