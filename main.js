/* 
Output in browser console
log is a method of the object console (The console object provides access 
to the browser's debugging console)
List of console methods: https://developer.mozilla.org/en-US/docs/Web/API/Console
*/

console.log('This is an example!');

/*
Variables: var, let and const
It is not a good practice to use var anymore, since var is globally scoped.
let and const have a block-level scope.
With let you can reassign values, with const you can't.
It is nice to always use const, unless you know you are going to reassign the value.
*/

let age = 23;
console.log(age);

age = 22;
console.log(age);

const username = 'Gabriel';
console.log(username);

/*
Datatypes: string, number, boolean, null, undefined, symbol, bigint (primitive datatypes)
In JavaScript there is no, for example, int or float values, everything is a number.
The typeof operator returns a string indicating the type of the given operand.
*/

const animal = 'Dog'; // string
const year = 2022; // number
const money = 20.55; // number
const isCool = true; // boolean
const x = null; // *object
const y = undefined; // undefined
let z; // undefined

console.log(typeof 42);

/*
Strings
There are a lot methods and properties related to strings, I will show the most
used ones, the full list can be found on the follow link
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
*/

const myString = 'Example String';

console.log(myString.length); // a property to check the length of the string
console.log(myString + '!'); // concatenating the string
console.log(myString.indexOf('String')); // checking the location of a substring
console.log(myString.substring(0, 7)); // extracting a substring

/*
Template Strings
Instead of quotes, use backtick to write the string, expressions must be inside ${}
*/

console.log(`My name is ${username} and I am ${age}`);

/*
Arrays
Arrays are list-like objects.
Even if the array is set as a const variable, you can manipulate the values in it but never reassign.
*/

const fruits = ['apples', 'oranges', 'bananas'];

fruits.unshift('pears') // add an item to the start
fruits.push('grapes'); // add an item to the end
fruits.pop(); // remove an item from the end

console.log(fruits);
console.log(fruits.length); // a property to check the length of the array
console.log(fruits[1]); // accessing the second element of the array
