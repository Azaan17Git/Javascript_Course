//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["Umair", "Uzair", "Samiullah"];
let myObj = {
    name: "Azaan Manzoor",
    age: 23,
}

const myFunction = function(){
    console.log("Hello world");
}
myFunction();

console.log(typeof anotherId);
