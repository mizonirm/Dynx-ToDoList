let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function displayTask(taskObj) {
    let li = document.createElement("li");
    li.innerText = taskObj.text;

    let completed = document.createElement("button");
    completed.innerText = "Completed";
    completed.classList.add("compbutton");

    completed.onclick = function () {
        taskObj.completed = true;

        document.getElementById("complist").appendChild(li);

        completed.remove();

        localStorage.setItem("tasks", JSON.stringify(tasks));
    };

    li.appendChild(completed);

    if (taskObj.completed) {
        document.getElementById("complist").appendChild(li);
        completed.remove();
    } else {
        document.getElementById("todolist").appendChild(li);
    }

    let button = document.createElement("button");
    button.innerText = "Delete";
    li.appendChild(button);
    button.classList.add("deletebutton");

    button.onclick = function () {
        li.remove();

        tasks = tasks.filter(t => t.text !== taskObj.text);

        localStorage.setItem("tasks", JSON.stringify(tasks));
    };

}

function addtask() {
    let input = document.getElementById("gettask");
    let task = input.value;

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    let taskObj = {
        text: task,
        completed: false
    };

    tasks.push(taskObj);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    displayTask(taskObj);

    input.value = "";
}

tasks.forEach(displayTask);

function showAll() {
    document.getElementById("pendingSection").style.display = "block";
    document.getElementById("completedSection").style.display = "block";
}

function showPending() {
    document.getElementById("pendingSection").style.display = "block";
    document.getElementById("completedSection").style.display = "none";
}

function showCompleted() {
    document.getElementById("pendingSection").style.display = "none";
    document.getElementById("completedSection").style.display = "block";
}