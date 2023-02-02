// Inputs
var taskText = document.querySelector("#task-text")
var taskPlace = document.querySelector("#task-place")
var taskTime = document.querySelector("#task-time")


var todoList = document.querySelector("#todo-list")
var taskItem = document.querySelector("#todo-item")
var warning = document.getElementById("warning")
var warningEnabled = false
const todo = {}
var count = 1

function addWarning(){
    warning = document.getElementById("warning")
    let html = `<p class="alert alert-warning"> Please Fill all Fields first. </p>`
    warning.innerHTML = html
}

function addTask() {
    if (taskText.value == "" || taskPlace.value == ""  || taskTime.value == ""){
        warningEnabled  = true
       addWarning()
    }
    else {
    if (warningEnabled){
        warning.innerHTML = ""
    }
    let taskId = 'a' + (Math.random(0)).toString(36).substring(7);
    todo[taskId] = {
        text: taskText.value,
        place: taskPlace.value,
        time: taskTime.value,
        id: taskId
    }

    const html = `
    <div class = "todo-item " id=${todo[taskId].id}> 
        <input class="form-check-input " onclick=checkList(${todo[taskId].id}) type="checkbox" value="" id="flexCheckChecked">
        <p id="todo-item-text" class="todo-color todo-item-text me-auto" id="">
            I will        
            <span class="todo-text ">${todo[taskId].text}</span>
            at 
            <span class="todo-time ">${todo[taskId].time}</span>
            in
            <span class="todo-place ">${todo[taskId].place}</span>
        </p>

        <i class="fa fa-trash item-trash" onclick="deleteItem(${todo[taskId].id})" style="font-size:"></i>
    </div>`
    todoList.innerHTML +=  html
    count++;

    // Emptying inputs after task is added
    taskText.value = ""
    taskPlace.value = ""
    taskTime.value = ""
    }
}

function checkList(e) {
    let todoList = document.getElementById(e.id)
    
    todoList.innerHTML= ` 
    <div class="form-check ">
        <input class="form-check-input" disabled checked onclick=checkList(${todo[e.id].id}) type="checkbox" value="" id="flexCheckChecked">
    </div>

    <p id="todo-item-text" class="text-decoration-line-through me-auto todo-item-text" >
        I will        
        <span class="todo-text ">${todo[e.id].text}</span>
        at 
        <span class="todo-place ">${todo[e.id].time}</span>
        in
        <span class="todo-place ">${todo[e.id].place}</span>
    </p>
    <i class="fa fa-trash item-trash" onclick="deleteItem(${todo[e.id].id})" style="color:red;"></i>
    `
}

function deleteTask (){
        location.reload()
}

function deleteItem(e){
    let todo_item = document.getElementById(e.id)
    todo_item.remove()

}