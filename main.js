/* 
Output in browser console
'log' is a method of the object 'console' (The console object provides access 
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
