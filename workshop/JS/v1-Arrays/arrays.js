let todoList = ["Item 1", "Item 2", "Item 3"];

// CALL AN ARRAY ITEM BY WITH THE INDEX
// Index is start with 0
todoList[0]; // output : "Item 1"
todoList[1]; // output : "Item 2"
todoList[2]; // output : "Item 3"


// Add an array item (.push)
todoList.push("Item 4");
todoList.push("I'm an element of the array");


//DELETE AN ARRAY ITEM (.splice)
todoList.slice(1,1); // start at index 1 and delete one item
todoList.slice(0,2); // start at index 0 and delete two items


// CHANGE AN ARRAY ITEM
todoList[1] = "Something else"; // define the index and asign a new value
