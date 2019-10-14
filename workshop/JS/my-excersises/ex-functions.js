function everyMonth(months, description) {
  return months + description;
}

console.log(everyMonth(" Genius ", " Januarys "));
console.log(everyMonth(" Fabulous ", " February "));
console.log(everyMonth(" Gorgeous ", " March "));
console.log(everyMonth(" Attractive ", " April "));
console.log(everyMonth(" Honest ", " May "));


// DISPLAY
function displayMonths () {
  console.log (everyMonths);
}

displayMonths();


// ADD
function addMonths (newMonth) {
  everyMonths.push(newMonth)
  displayMonths();
}

addMonths("June");
addMonths("July")
addMonths("August")

//CHANGE
function changeMonths (index, monthName) {
everyMonths[index] = monthName;
displayMonths();
}

changeMonths (2, "December");
changeMonths (6, "November")


// DELETE

function deleteMonths (index) {
  everyMonths.splice(index, 1);
  displayMonths();
}

deleteMonths(0);
deleteMonths(6);