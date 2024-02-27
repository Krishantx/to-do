var checkbox = document.querySelectorAll(".checkbox");
var numberOfCheckboxes = 5;
document.querySelector(".ip").addEventListener("keydown", checkKey);
document.querySelector(".addTask").addEventListener("click", addNewTask);
document.querySelector(".show").addEventListener("click", showPriority);
var qriority = document.querySelector(".hide").childNodes;
console.log(qriority);
for (var k=0; k<3; k++) {
    qriority[k].addEventListener("click", selectThis);
}
for (var j=0; j<5; j++) {
    document.querySelectorAll(".border")[j].addEventListener("click", addClass);
}

function addClass() {
    this.classList.add("green");
}

function showPriority() {
    if (document.querySelector(".hide").style.display == "none") {
        document.querySelector(".hide").style.display = "flex"
    } 
    else {
        document.querySelector(".hide").style.display = "none";
    }
}
function statusChange() {
    alert(this.innerHTML);
    this.innerHTML = "<s>" + this.innerHTML + "</s>";
}

function checkKey(e) {
    if (e.keyCode == 13) {
        addNewTask();
    }

}
function addNewTask() {
    var taskName = document.querySelector(".ip").value;
    document.querySelector(".ip").value = "";
    var priority = document.querySelector(".show").innerHTML;
    if (due != null) {
        var due = document.querySelector(".due").value;
    }
    else {
        due = "No dueDate;"
    }
    
    console.log(due);
    document.querySelector(".list").innerHTML = document.querySelector(".list").innerHTML + "<div>"+taskName+"</div><div>Status</div><div>"+due+"</div><div>"+priority+"</div><div>edit</div>"; 
}

function selectThis() {
    document.querySelector(".show").innerHTML = this.innerHTML;
    document.querySelector(".hide").style.display = "none";
}