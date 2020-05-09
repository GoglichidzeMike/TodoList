// selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');



// event listeners
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck);


// function

function addTodo(event) {
  //prevent from refreshing
  event.preventDefault()
  if (todoInput.value) {
    // create div for the whole Todo Item including buttons
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')

    //create li - the actual to-do item with
    const newTodo = document.createElement('li');
    newTodo.classList.add('todo-item');
    newTodo.innerText = todoInput.value;
    todoDiv.appendChild(newTodo);

    //create check mark button
    const checkButton = document.createElement('button');
    checkButton.classList.add('check-button');
    checkButton.innerHTML = '<i class="far fa-check-square"></i>';
    todoDiv.appendChild(checkButton)

    //create delete button
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.innerHTML = '<i class="fa fa-trash"></i>';
    todoDiv.appendChild(deleteButton);

    //append to list
    todoList.appendChild(todoDiv);
    todoInput.value = '';
  } else {
    alert('Please Enter A Valid To-Do Item.')
  }
}


function deleteCheck(e) {
  const item = e.target;

  //delete the todo
  if(item.classList[0] === 'delete-button'){
    const todo =  item.parentElement;
    //Animation
    todo.classList.add('fall')
    todo.addEventListener('transitionend', function(){
      todo.remove();
    })
  }
  //Check Mark
  if(item.classList[0] === 'check-button'){
    const todo = item.parentElement;
    todo.classList.toggle('completed')
  }
}