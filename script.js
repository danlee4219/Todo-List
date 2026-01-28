let input=document.getElementById("todoinput");
let addbtn=document.getElementById("addbtn");
let todolist=document.getElementById("todolist");

// add logic
addbtn.addEventListener("click",()=>{
    let task=input.value;

    if(task===""){
        alert("Please enter a task");
        return;
    }
    //create li
    let li=document.createElement("li");
    li.innerText=task;

    //create delete button
    let deletebtn=document.createElement("button");
    deletebtn.innerText="Delete";
    deletebtn.classList.add("delete-btn");

    //delete logic
    deletebtn.addEventListener("click",()=>{
        li.remove();
    });

    li.appendChild(deletebtn);
    todolist.appendChild(li);

    innput.value="";

});

