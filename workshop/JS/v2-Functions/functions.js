// age first version. hard coded, no arguments
// function age() {
//   let birthYear = 1992;
//   let currentYear = 2019;
//   let age = currentYear - birthYear;

//   return age;
// }

//console.log( age() );


// age second version. hard coded, one argument (parameter)
function age(birthYear) {
  let currentYear = 2019;
  let age = currentYear - birthYear;

  return age;
}

//console.log( age(1992) );
// console.log( age(1993) );
// console.log( age(1994) );
// console.log( age(1991) );
// console.log( age(1966) );


function sayHello(yourName) {
  return "Say Hello, " + yourName;
}

// console.log( sayHello( "Hi Mark"));
// console.log( sayHello( "BOB"));


function nameOfTheWeek (weekDays) {

return "Today is, " + weekDays;

}

// console.log (nameOfTheWeek("Monday"));
// console.log (nameOfTheWeek("Tuesday"));
// console.log (nameOfTheWeek("Wednesday"));



// age third version. two arguments (parameters)
  function age(birthYear, currentYear) {
  let age = currentYear - birthYear;

  return age;
}

// console.log( age(1992, 2019) );
// console.log( age(1993, 2019) );


// age fourth version. one argument, one JS native function (parameters)
function age(birthYear) {
  let currentYear = new Date().getFullYear();
  let age = currentYear - birthYear;

  return age;
}

// console.log( age(1992) );
// console.log( age(1993) );
// S

function weather (city, weather){
  return "Today in" + city + " is a " + weather + "day.";
}

// console.log (weather(" Lausanne","sunny "));
// console.log (weather(" Clarens","rainy "));
// console.log (weather(" Montreux","foggy "));
// console.log (weather(" Bern", "snowing "));


function cricket (dhoni, warner) {
return "My favourite cricket players are" + dhoni + "and" + warner;
}

// console.log (cricket(" MS Dhoni "," David Warner."));


