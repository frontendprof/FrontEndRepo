// Defining UI Variables
const taskList=document.querySelector(".collection");
const taskInput=document.querySelector("#task");
const filter=document.querySelector('#filter');
const form=document.querySelector('#task-form');
const clearBtn=document.querySelector(".btn");


// Loading all event listeners
loadAllEventListeners();

function loadAllEventListeners(){
    // Adding task event
    form.addEventListener("submit",addTask);


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

    // Clear input field
    taskInput.value="";


    e.preventDefault();
    

}