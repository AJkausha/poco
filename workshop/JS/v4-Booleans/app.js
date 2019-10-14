// MY TODO list - PROPERTY
//START OBJECT todos
let todos  = {
  list : [

    ["learn HTML", false],

    {
      text: "Learn  HTML5",
      completed: false
    },

    {
      text: "Learn CSS",
      completed: false
    },

    {
      text: "Learn JS",
      completed: false
    },

    {
      text: "Learn PHP",
      completed: false
    },
  ],

 

  // DISPLAY TODOS - METHOD
  displayTodos: function() {
   console.log(this.list);

 },

 //ADD TODO
 addTodo: function(todoText) {
  this.list.push(todoText);
  this.displayTodos();
},

//CHANGE TODO
changeTodo : function (index,changeText) {
  this.list[index] = changeText;
  this.displayTodos();
},

// DELETE TODO
deleteTodo: function (index) {
  this.list.splice(index, 1);
  this.displayTodos();
},

temp : function () {
  console.log("Hello World !");
}//END OBJECT todos


}
todos.temp();
console.log(todos.list);
todos.addTodo("I am a good girl!");
todos.changeTodo(1,"Change CSS");
todos.deleteTodo(0);















