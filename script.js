let ctr=1
function addTask(){
    const inputVal= document.querySelector("input").value;
    const newEl= document.createElement("div");
    newEl.setAttribute("id", "task"+ctr);
    newEl.innerHTML="<div>"+inputVal+'</div><button onclick="removeTask(' + ctr + ')">Remove</button>';
    document.body.appendChild(newEl);
    ctr++;
}
function removeTask(index){
    const task= document.getElementById("task"+index);
    task.parentNode.removeChild(task);
    
}
