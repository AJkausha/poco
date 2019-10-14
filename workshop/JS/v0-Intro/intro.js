//Single line comment
/* Multi
line
comment


/**
 * DATA TYPES
 * All data types in Java Script
 * ********************************
 */



/* STRINGS
-----------------------------------*/
"I'm Kaushalya"
'I\'m Kaushalya'

'<h1 class="bob" id="dada"> I\'m BoB </h1>'


/* NUMBERS
-----------------------------------*/
3 // integer
45
34567
0
1


34.2 // Decimal or float

-3 // Negative number
-0.01


/* BOOLEANS
-----------------------------------*/
true //also 1
false //also 0


/* NULL & UNDEFINED
-----------------------------------*/
let bob = null;
let age = undefined;


/* OBJECTS
-----------------------------------*/

//Array
["Bob", "Mark", "James"]


//Function
function myFunction(){
  return 'something';
}


//Object
{
"Name" : "Kaushalya",
"Age" : 27,
"Country" : "SR"
}


/**
 * VARIABLES
 * Variables are like boxes / containers
 * ********************************
 */

 //Let => when content will/can change
let name = "Kaushalya";
let age = 27;
let person = name + age;

// const => when content must not change
const days = ["Moday", "Tuesday", "etc"];

// Var => the old way, a global variable
var bob =3;

// RULES & CONVENTIONS (of naming variables)
let bob =3; // Good
let BOB = 3; // bad practice
let Bob = 3; // bad practice

let 0bob = 3; // Wrong practice
let bob the great = 3; // wrong practice
let aimè = 3; //wrong practice

// JS is case sensitive language
let bob = 3;
let BOB = 2; // not the same as bob

// Long words and teh Camel case
let bob_the_great = 34; // could be like this
let bobthegreat = 34; // bad practice
let bobTheGreat = 34; // good practice, very used

