 const date = new Date()

 let currentday = document.querySelector('#current-day')

let day = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
let days = day[date.getDay()]

let month = ['January','February','March','April','May','June','July','August','September','October','November','December']
let months = month[date.getMonth()]

let dates = date.getDate()
let year = date.getFullYear()

let p = `${days} ${months} ${dates} ${year}`;

currentday.innerHTML = p

const time = date.getHours()

function getGreeting() {
    if(time < 12){
        return 'Good Morning, Victoria'
    }else{
        return 'Good Afternoon, Victoria'
    }
}getGreeting()
let greeting = document.getElementById('greeting')
greeting.innerHTML = getGreeting()


let img = document.querySelector('#div-img')
let input = document.querySelector('#input')
let ul =  document.querySelector('#div-ul')
let lastdiv = document.querySelector('#last-div')
const taskStorage = getTask
img.addEventListener('click',  (e) => {
    e.preventDefault()
    clearTaskList()
    dailytask.innerHTML = 'OUTLINED TASK FOR THE DAY';
    if(input.style.display == 'none'){
        input.style.display = 'block'
        ul.style.display = 'block'
    }else{
        input.style.display = 'none'
        ul.style.display = 'none'
    }
})
function getTask(){
    let task = input.value
    if (task){
    let li = document.createElement('li')
    li.textContent = task
    ul.appendChild(li)
        input.value = ''
        saveTasksToLocalStorage() 
   
 }
}
function saveTasksToLocalStorage() {
    const tasks = [];
    for (let i = 0; i < ul.children.length; i++) {
        tasks.push(ul.children[i].textContent);
    }
    localStorage.setItem(taskStorage, JSON.stringify(tasks));
}



let addButton = document.querySelector('#addTask');
addButton.addEventListener('click', getTask, generalTasks);





let dailytask = document.querySelector('#DailyTask')

function generalTasks() { 
const generalTask = document.getElementById('generalTask');
   generalTask.addEventListener('click', function() {
        clearTaskList()
        if(input.style.display == 'none'){
            dailytask.innerHTML = 'General Task For The Day';
            input.style.display = 'block'
            ul.style.display = 'block'
            loadTasksFromLocalStorage();
        }else{
            input.style.display = 'none'
        }
        
    });
}generalTasks()


let meeting = document.getElementById('upcomingMeeting')

function upcomingMeetings() {
meeting.addEventListener('click', function() {
        clearTaskList()
   if(input.style.display == 'none'){
    dailytask.innerHTML = 'Upcoming Meeting';
    input.style.display = 'block'
       ul.style.display = 'block'
       loadTasksFromLocalStorage();
       }else{
    input.style.display = 'none'
       ul.style.display = 'none'
   }
   })
}upcomingMeetings()


function loadTasksFromLocalStorage() {
    const storedTasks = JSON.parse(localStorage.getItem(taskStorage));
    if (storedTasks) {
        ul.innerHTML = '';
        storedTasks.forEach(task => {
            let li = document.createElement('li');
            li.textContent = task;
            ul.appendChild(li);
        });
    }
}
function clearTaskList() {
    ul.innerHTML = '';
}
