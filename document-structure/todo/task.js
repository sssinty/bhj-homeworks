 const buttonAdd = document.getElementById("tasks__add");
 const form = document.getElementById("tasks__form");
 const inputText = document.getElementById("task__input");
 const taskList = document.getElementById("tasks__list");
 
function newTask(e) {
    if(inputText.value != ''){
        e.preventDefault();
        const task = document.createElement("div");
        task.classList.add("task");

        const taskTitle = document.createElement("div");
        taskTitle.classList.add("task__title");
        taskTitle.innerHTML = inputText.value;

        const remove = document.createElement("a")
        remove.href = "#";
        remove.classList.add("task__remove");
        remove.innerHTML = "&times;";
        remove.addEventListener("click", () => {
            taskList.removeChild(task);
        });

        task.appendChild(taskTitle);
        task.appendChild(remove);
        taskList.appendChild(task);

        form.reset();
        
    }
}

buttonAdd.addEventListener("click", newTask, false);

document.addEventListener("keydown", event => {
    if(event.code === "Enter") {
        newTask(event);
    }
}, false);

