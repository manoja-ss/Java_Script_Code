"use Strict"; // treat all JS Code as newer version

// alert( 17 + 18); => we are using nodejs Not browser.

console.log( 17 
    + 
    1); // code readability should be high

console.log("Manoja");

/* Notes Documentation 
1. MDN -> https://developer.mozilla.org/en-US/docs/Web/JavaScript
2. tc39 -> https://tc39.es/ecma262/#sec-intro
*/

let number = 1;
let name = "Manoja S S";
let isLoggedIn = true;
let temp = null;
let accountStatus;

console.table([number, name, isLoggedIn, temp,accountStatus]);
console.log(typeof number);// Number
console.log(typeof name);// String
console.log(typeof isLoggedIn);// boolean
console.log(typeof temp);// Object
console.log(typeof accountStatus);// Undefined

// Number -> 2 the power 53
// bigint => Used for Larger Range
// String 
// Boolean => true / false
// symbole => unique 
// all this are primitive data type

// object