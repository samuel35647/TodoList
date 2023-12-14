let inputBox = document.getElementById("input-box");
let listContainer = document.getElementById("list-container");

// working on add function
function addTask() {
    // alert("🧑‍💻Zeke Coding");
    if (inputBox.value === ''){
       alert("🧑‍💻Zeke said, You must write something");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; 
        li.appendChild(span);
    }

    inputBox.value = "";
    saveDate();
}
// listcontainer function
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveDate();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveDate();
    }
}, false);

function saveDate() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTasks(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTasks();