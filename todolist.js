function addTask(){
    var taskInput=document.getElementById("new-task")
    var tasklist=document.getElementById("task-list")
    if(taskInput.value===""){
        alert("PLEASE ENTER A TASK")
        return 
    }
    var listItem=document.createElement('li')
    listItem.innerText=taskInput.value


    var buttonContainer=document.createElement('div')
    buttonContainer.className='task-button'


    var deletebutton=document.createElement('button')
    deletebutton.innerText='Delete'
    deletebutton.onclick=function(){
        tasklist.removeChild(listItem)
    }

    var completebutton=document.createElement('button')
    completebutton.innerText="Complete"
    completebutton.onclick=function(){
        listItem.classList.toggle('comp')
    }
    
    buttonContainer.appendChild(completebutton)
    buttonContainer.appendChild(deletebutton)
    listItem.appendChild(buttonContainer)
    tasklist.appendChild(listItem)

}