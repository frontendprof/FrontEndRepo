// Defining UI Variables
const taskList=document.querySelector(".collection");
const taskInput=document.querySelector("#task");
const filter=document.querySelector('#filter');
const form=document.querySelector('#task-form');
const clearBtn=document.querySelector(".clear-tasks");


// Loading all event listeners
loadAllEventListeners();

function loadAllEventListeners(){
    // DOM Content event
    document.addEventListener("DOMContentLoaded",getTasks);
    // Adding task event
    form.addEventListener("submit",addTask);
    // Removing task event
    taskList.addEventListener("click",removeTask);
    // Clearting task event
    clearBtn.addEventListener("click",clearTasks);
    // Filter event
    filter.addEventListener('keyup',filterTasks);


}

// Get tasks
function getTasks(){
    let tasks;
    if(localStorage.getItem("tasks")===null){
        tasks=[];
    }else{
        tasks=JSON.parse(localStorage.getItem("tasks"));
    
    }
    tasks.forEach(function(task){

        // Create li element
        const li=document.createElement("li");
        // Add class
        li.className="collection-item";
        // Create text node and append to li
        li.appendChild(document.createTextNode(task));
        // Create link element
        const link=document.createElement("a");
        // Add class
        link.className="delete-item secondary-content";
        // Create html icon
        link.innerHTML='<i class="fa fa-remove"></i>';
        // Append the link to li
        li.appendChild(link);
        // Append li to ul
        taskList.appendChild(li);
    });
}

// Defining addTask
function addTask(e){
    if(taskInput.value===""){
        alert("Please enter an input.")        
    }

    // Create li element
    const li=document.createElement("li");
    // Add class
    li.className='collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create a new link element
    const link=document.createElement('a');
    // Add class
    link.className="delete-item secondary-content";
    // Create html icon
    link.innerHTML='<i class="fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(link);
    // Append li to ul
    taskList.appendChild(li); 

    // Store tasks in LS
    storeToLocalStorage(taskInput.value);

    // Clear input field
    taskInput.value="";


    e.preventDefault();
    

}

// Store in LS
function storeToLocalStorage(task){
    let tasks;
    if(localStorage.getItem("tasks")===null){
        tasks=[];
    }else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem("tasks",JSON.stringify(tasks));

}

// Remove task
function removeTask(e){
    
    if(e.target.parentElement.classList.contains('delete-item')){
        e.target.parentElement.parentElement.remove();
    }

    removeFromLocalStorage(e.target.parentElement.parentElement);
    
}

// Remove from LS
function removeFromLocalStorage(taskItem){
    let tasks;
    if(localStorage.getItem("tasks")===null){
        tasks=[];
    }else{
        tasks=JSON.parse(localStorage.getItem("tasks"));
    }
    tasks.forEach(function(task,index){
        if(taskItem.textContent===task){
            tasks.splice(index,1);
        }
    });
    localStorage.setItem("tasks",JSON.stringify(tasks));
}

// Clear tasks
function clearTasks(){
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
    // Clear tasks from LS
    cleartTasksFromLocalStorage();
}

function cleartTasksFromLocalStorage(){
    localStorage.clear();
}

// Filter tasks
function filterTasks(e){
    const text=e.target.value.toLowerCase();
    
    document.querySelectorAll(".collection-item").forEach(function(task){
        const item=task.firstChild.textContent;

        if(item.toLowerCase().indexOf(text)!=-1){
            task.style.display="block";
        }else{
            task.style.display="none";
        }

    });
       

}