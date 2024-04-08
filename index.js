var taskInput = document.getElementById("task");
var addButton = document.getElementById("add");
var taskList = document.getElementById("taskList");
var count = 0;

function deleteTask(event) {
    var listItem = event.target;
    if (listItem.tagName === "LI") {
        taskList.removeChild(listItem);
        if(count>0){
           count--;
        }
    }
}

function addTask() {

    var taskText = taskInput.value;

    if (taskText.trim() !== "") {
        if(count==4){
            alert("Task list is over flowing, Please complete your pending task!");
        }
        else{
            var listItem = document.createElement("li");
            listItem.textContent = taskText;
            taskList.appendChild(listItem);
            taskInput.value = "";
            count++;
        }
    
    } 
    else {
        alert("Please enter a task!");
    }
}

taskList.addEventListener("click", deleteTask);

function taskHandler(event){
    event.preventDefault();
    addTask();
}
