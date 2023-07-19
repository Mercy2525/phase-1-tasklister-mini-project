document.addEventListener("DOMContentLoaded", () => {
  let form= document.querySelector("#create-task-form").addEventListener("submit",function(e){
    e.preventDefault();
    
//get elements
let input= document.getElementById("new-task-description")
let list= document.createElement('li')
list.textContent= `${input.value}`
let output= document.getElementById("tasks")
output.appendChild(list)
  
  })
 
})



    
  











