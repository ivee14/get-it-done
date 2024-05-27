function saveTaskListToLocalStorage() {
    const tasks = Array.from(ul.querySelectorAll('li')).map(li => li.textContent);
    localStorage.setItem('taskList', JSON.stringify(tasks));
}

function loadTaskListFromLocalStorage() {
    const tasks = JSON.parse(localStorage.getItem('taskList')) || [];
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task;
        ul.appendChild(li);
    });
}

loadTaskListFromLocalStorage();

// function getTask() {
//     let task = input.value;
//     if (task) {
//         let li = document.createElement('li');
//         li.textContent = task;
//         ul.appendChild(li);
//         input.value = '';
//         saveTaskListToLocalStorage(); // Save to local storage
//     }
// }
