/* WELCOME TO YOUR FIRST JAVASCRIPT BASIC ASSIGNMENT!
All the assignment instructions are commented out so that you can write your code in between them.
Remember to read the instructions CAREFULLY, write short comments for your code,
and feel free to ask for help if you're stuck.


******** GOOD LUCK! *********/

/* ASSIGNMENT 1

Your first task will be to link this javascript file to the index.html file
using one of the methods I showed in the first lecture.
<-- Locate the index.html file in the file browser and link it to this file, javascript.js */

//log for clarity under code refresh
console.log("--Fresh--");

/* ASSIGNMENT 2

Last lecture I showed you how to make variables that can hold values of the various data types.
Make some variables of the following datatypes: 
String, number, boolean, array
You can choose what the actual content is.
Try to use both the let and const keywords */

const w = "white";
let b = "blue";

const flatWorld = false;
const hobbyArray = ["Gaming", "Anime", "Manga", "Karaoke"];

/* ASSIGNMENT 3

Try out a few of the operators we looked at (+, -, /, *)
as well as a few of the shorthand operators (++, --, +=, -=) */

let x = 736;
let g = "Gotta";
const y = x--;
const move = " keep moving";

console.log(x);

console.log((g += move));

console.log((x += y) / 3.14);

/* ASSIGNMENT 4

Write an IF/ELSE conditional statement that checks whether username is empty, 
that the user age is 18+, and that the userIsBlocked is false. 

(HINT: Use the && (logical AND) to check several things in one IF statement)

If all of these conditions are true, change the userIsLoggedIn variable to true and 
and the goToPage variable to "/home" then console.log a welcome message. 

If any of the conditions for logging in are not met, console.log an error message.

Try changing the values of the variables to make sure your IF/ELSE conditional
can handle all cases correctly */

const userName = "Tom";
const userAge = 18;
let userIsLoggedIn = false;
let userIsBlocked = false;
let goToPage = "";

if (userName && userAge >= 18 && !userIsBlocked) {
  userIsLoggedIn;
  goToPage = "/Home";
  console.log("Welcome " + goToPage + " user");
} else {
  !userIsLoggedIn;
  console.log("ERROR: Unable to log in");
}

/* ASSIGNMENT 5 

(NOTE: We didn't get around to cover this today (11.04), but we will cover this on thursday)

Make a variable called userTitle and set the content equal to "Mr." if userMale is true,
or to "Mrs." if userMale is false. Use the TERNARY conditional to do this:

const variable = statement ? "this if true" : "this if not true"

Try changing userMale to both true and false and console.log your new variable,
to see that your conditional is working.
*/
const userMale = false;

const userTitle = userMale ? "Mr. if true" : "Mrs. if not true";

const userMaleToggle = true;

console.log(userTitle);
