//Selectors
const todoInput=document.querySelector(".todo-input");
const todoButton=document.querySelector(".todo-button");
const todoList=document.querySelector(".todo-list");
const filterOption=document.querySelector(".filter-todo");

//Event Listerners
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);
filterOption.addEventListener('click',filterTodo);


//Functions
function addTodo(event)
{
    // Prevent the page from reloading after submitting
    event.preventDefault();
    // to do DIV
    const todoDiv=document.createElement('div');
    todoDiv.classList.add("todo");
    //Create LI
    const newTodo=document.createElement('li')
    newTodo.innerText=todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //Check Buttons
    const completedButton=document.createElement('button');
    completedButton.innerHTML='<i class="fas fa-check"></i>';
    completedButton.classList.add('completed-btn');
    todoDiv.appendChild(completedButton);
    const trashButton=document.createElement('button');
    trashButton.innerHTML='<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    //Append to the main DIV
    todoList.appendChild(todoDiv);
    //Clear To Do Value
    todoInput.value="";

}
todoList.addEventListener('click',deleteCheck);

function deleteCheck(event){
    const item=event.target;
    //Delete Todo
    if(item.classList[0]==="trash-btn"){
        const todo=item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener('transitionend',function(){todo.remove();});
        
    }
    //Check ToDO
    if(item.classList[0]==="completed-btn"){
        const todo=item.parentElement;
        todo.classList.toggle('completed');
    }
}
function filterTodo(event){
    const todos= todoList.childNodes;
    todos.forEach(function(todo){
        switch (event.target.value) {
            case "all":
                todo.style.display="flex";

                break;
        
            case "completed":
                if(todo.classList.contains('completed')){
                    todo.style.display="flex";

                }
                else{                    
                    todo.style.display="none";
            }
            break;
            case "uncompleted":
                if(!todo.classList.contains('completed')){
                    todo.style.display="flex";

                }
                else{                    
                    todo.style.display="none";
            }
            break;
        }
    })
}
