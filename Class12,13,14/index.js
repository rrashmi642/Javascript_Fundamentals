const tasks = JSON.parse(localStorage.getItem("tasks")) || [
  { priority: 3, id: 1, content: "Task 1" },
  { priority: 2, id: 2, content: "Task 2" },
  { priority: 4, id: 3, content: "Task 3" },
  { priority: 1, id: 4, content: "Task 4" },
  {
    priority: 3,
    content: "Task 5",
    id: 5,
  },
  {
    priority: 1,
    id: 6,
    content: "Task 6",
  },

  {
    priority: 2,
    id: 7,
    content: "Task 7",
  },
  {
    priority: 2,
    id: 8,
    content: "Task 8",
  },
];


function updateLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
let newTask = {
  priority: "",
  id: '',
  content: "",
};
const taskcontainerRef = document.querySelector(".task-container");
const createButtonRef = document.querySelector(".create-icon");
const closebuttonref = document.querySelector(".close");
const taskModalRef = document.querySelector(".task-modal");
const PrioritiesRef = document.querySelectorAll(".priority");
const textRef = document.querySelector(".left-section textarea");
const deleteIconRef = document.querySelector(".task-delete-icon");
const priorityFilterBoxesRef = document.querySelectorAll(".filters .box");
const readOnlyBtnRef =  document.querySelector(".header .actions .disable-icon.icons")


function removeTask(id) {
  console.log(id);
  const indexToRemove = tasks.findIndex((task) => task.id == id);
  if (indexToRemove != -1) {
    tasks.splice(indexToRemove, 1);
  }
  updateLocalStorage();
}

function updateTask(id, newValue) {
    const indexToRemove = tasks.findIndex(task => task.id == id);
    if (indexToRemove !== -1) {
        const currentTask = tasks[indexToRemove];
        currentTask.content = newValue;
        tasks.splice(indexToRemove , 1, currentTask);
    }
    updateLocalStorage();
}
function createTask(priority, id, content) { 
  const newTaskRef = document.createElement("div");
  newTaskRef.classList.add("task");
  console.log("inside create task"+id);
  newTaskRef.innerHTML = `<div class="task-priority priority p${priority}" ></div>
            <div class="task-id">${id}</div>
            <div class="task-content"> <textArea> ${content} </textArea></div>
            <div class="task-delete-icon"> <i class="fa-solid fa-trash"></i> </div>`;
  newTaskRef.setAttribute("data-id", id);
  newTaskRef.setAttribute("data-priority", priority);
  taskcontainerRef.appendChild(newTaskRef);

  newTaskRef
    .querySelector(".task-delete-icon")
    .addEventListener("click", function (e) {
      console.log("Yes");
      const taskRef = e.target.closest(".task");
      console.log(taskRef.getAttribute("data-id"));
    });

  newTaskRef
    .querySelector(".task-delete-icon")
    .addEventListener("click", function (e) {
      const taskRef = e.target.closest(".task");
      removeTask(taskRef.getAttribute("data-id"));
      renderList();
    });

    newTaskRef.querySelector('.task-content textarea').addEventListener('change', function(e) {
        const newValue = e.target.value;
        updateTask(id, newValue);
    });
    updateLocalStorage();
  updateLocalStorage();
}

function renderList() {
  taskcontainerRef.innerHTML = '';
  tasks.forEach((task) => {
    createTask(task.priority, task.id, task.content);
  });
}
function closeModal() {
  taskModalRef.classList.add("hide");
}

function openModal() {
  console.log("inside open modal ");
  taskModalRef.classList.remove("hide");
  newTask.id = Math.floor(Math.random()*1000);
  console.log("inside open modal"+newTask.id);
}
// createButtonRef.addEventListener("click", function (event) {
//   taskModalRef.classList.remove("hide");
// });

createButtonRef.addEventListener('click', function() {
    openModal();
});

closebuttonref.addEventListener("click", function () {
  // taskModalRef.classList.add('hide');
  closeModal();
});

PrioritiesRef.forEach((priorityRef) => {
  priorityRef.addEventListener("click", function (e) {
    PrioritiesRef.forEach((ref) => {
      ref.classList.remove("selected");
    });
    e.target.classList.add("selected");
    newTask.priority = e.target.getAttribute("data-priority");
    console.log(newTask);
  });
});
textRef.addEventListener("keyup", function (e) {
  newTask.content = e.target.value;
  console.log(newTask), e.key;
  if (e.key == "Enter") {
    console.log(e.key);
    tasks.push(newTask);
    newTask = {};
    closeModal();
    console.log();
    renderList();
  }
});

function applyFilter(priority) {
  const allTasksRef = document.querySelectorAll(".task-container .task");

  allTasksRef.forEach((taskRef) => {
    const taskPriority = taskRef.getAttribute("data-priority");
    if (taskPriority === priority || priority === "0") {
      taskRef.classList.remove("hide");
    } else {
      taskRef.classList.add("hide");
    }
  });
}

priorityFilterBoxesRef.forEach((boxRef) => {
  boxRef.addEventListener("click", function (e) {
    applyFilter(e.target.getAttribute("data-priority"));
  });
});

readOnlyBtnRef.addEventListener('click', function(e){
  if(readOnlyBtnRef.classList.contains('selected')) { readOnlyBtnRef.classList.remove('selected');
  taskcontainerRef.classList.remove('noneditable');
}

  else { readOnlyBtnRef.classList.add('selected');
        taskcontainerRef.classList.add('noneditable');

  }
})
renderList();
