function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");

  if (taskInput.value.trim() !== "") {
    var li = document.createElement("li");
    li.className = "taskItem";
    li.innerHTML = "<span>" + taskInput.value + '</span><button class="deleteTaskBtn">Elimina</button>';

    li.addEventListener("click", function () {
      li.classList.toggle("completed");
    });

    var deleteBtn = li.querySelector(".deleteTaskBtn");
    deleteBtn.addEventListener("click", function (event) {
      event.stopPropagation();
      taskList.removeChild(li);
    });

    taskList.appendChild(li);

    taskInput.value = "";
  }
}
