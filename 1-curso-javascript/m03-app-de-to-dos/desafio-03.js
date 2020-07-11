var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {

  listElement.innerHTML = '';

  for (const todo of todos) {
    var todoElement = document.createElement('li');
    todoElement.innerText = todo;

    var linkElement = document.createElement('a');
    linkElement.setAttribute('href', '#');
    linkElement.innerText = 'Excluir';

    var pos = todos.indexOf(todo);
    linkElement.setAttribute('onclick', `deleteTodo(${pos})`);

    todoElement.appendChild(linkElement)
    listElement.appendChild(todoElement)
  }
}

renderTodos();


function addTodo() {
  var todoText = inputElement.value;
  todos.push(todoText);
  inputElement.value = '';
  renderTodos();
  saveToStorage();
}

buttonElement.onclick = addTodo;



function deleteTodo(pos) {
  todos.splice(pos, 1);
  renderTodos();
  saveToStorage();
}


function saveToStorage() {
  localStorage.setItem('list_todos', JSON.stringify(todos));
}