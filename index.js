const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function code for the Add Task button
function AddTask(){
if(inputBox.value ===''){
    alert("You must write something !");
}
else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
}
inputBox.value = "";
saveData();   // For saving data
}

// Function code for the click action
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

// Location for saving the data
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

// Function code to show the task 
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
