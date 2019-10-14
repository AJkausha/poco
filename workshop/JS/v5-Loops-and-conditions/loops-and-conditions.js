// CONDTIONS : WHAT TO DO DPENDING ON THE WEATHER
// let weather = "snowing"; // sunny, rainy, cloudy, snowing

// if(weather=="sunny") {
//   console.log("Take your sun glasses..!");
// }

// else if(weather=="rainy") {
//   console.log("Take your umbrella..!");
// }

// else if(weather=="cloudy") {
//   console.log("Take your Jacket..!");
// }

// else if(weather=="snowing") {
//   console.log("Take your sledge..!");
// }

// else {
//   console.log("dont know yet...");
// }


// Age Conditions

function calculateAge (birthYear) {
  let currentYear = new Date().getFullYear();
  let age = currentYear - birthYear;
  let msg = "";

  if(age < 6) {
    msg = "Drink your milk";
  }

  else if (age >= 6 && age < 18) {
    msg= "Go to sleep, you have school tomorrow..!";
  }
  else if(age >= 18 && age < 40) {
    msg = "Work hard, you can do it..!";
  }
  else if(age >= 40 && age <= 65) {
    msg = "You won 1 million dollars..!";
  }
  else if (age>65) {
    msg = "Take your pills..!";
  }

  else {
    msg = "Lets drink..!";
  }

  return "You have " + age + " : " + msg; // You have 53: Lets Party!
}

console.log(calculateAge(2000));
console.log(calculateAge(1930));
console.log(calculateAge(1992));
console.log(calculateAge(2016));
console.log(calculateAge(2008));














// COMPARAISON OPERATORS
/*

== // => equality
=== // => strict equality
||  //OR
&& //And
> - greater than
>= - greater than equal
< - Less than
<= - Less than equal

*/