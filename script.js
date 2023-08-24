let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function renderTasks() {
  const taskList = document.querySelector('.task-list');
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const taskDiv = document.createElement('div');
    taskDiv.className = 'task';
    taskDiv.innerHTML = `<input type='checkbox' onclick='toggleTask(${index})' ${task.done ? 'checked' : ''}><span>${task.text}</span><button onclick='editTask(${index})'>Editar</button>`;
    taskList.appendChild(taskDiv);
  });
}

function addTask() {
  const taskInput = document.getElementById('task-input');
  const taskText = taskInput.value;
  tasks.push({ text: taskText, done: false });
  localStorage.setItem('tasks', JSON.stringify(tasks));
  taskInput.value = '';
  renderTasks();
}

function toggleTask(index) {
  tasks[index].done = !tasks[index].done;
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTasks();
}

function editTask(index) {
  const newText = prompt('Editar tarefa:', tasks[index].text);
  if (newText) {
    tasks[index].text = newText;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
  }
}

renderTasks();
