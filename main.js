// selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');



// event listeners
todoButton.addEventListener('click', addTodo)



// function

function remove(event){
  const parent = this.parentNode;
  parent.classList.add('remove')
}

function addTodo(event){
  //prevent from refreshing
  event.preventDefault()
  if(todoInput.value){
  // create div for the whole Todo Item including buttons
  const todoDiv = document.createElement('div')
  todoDiv.classList.add('todo')

  //create li - the actual to-do item with text
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
  }else{
    alert('Please Enter A Valid To-Do Item.')
  }
}
 