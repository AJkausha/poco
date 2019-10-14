// MY TODO LIST (Global scope)
let todoList = [
"Learn HTML5", 
"Learn CSS", 
"Learn JS", 
"Learn PHP"
];


 // DISPLAY TODOS
 function displayTodos() {
   console.log(todoList);
 }
 displayTodos(); // Local scope - not available outside the function


// ADD TODO
function addTodo(todoText) {
  todoList.push(todoText);
  displayTodos();
}

addTodo("Do that!");



// CHANGE TODO
function changeTodo(index,changeText) {
  todoList[index] = changeText;
  displayTodos();
}

changeTodo(3, "Hello");
changeTodo  (4, "Hello world");
changeTodo  (2, "Blah Blah");


// DELETE TODO
function deleteTodo(index) {
  todoList.splice(index, 1);
  displayTodos();
}

deleteTodo(0);
deleteTodo (1)