// const userEmail = "Azaanofficial.17@gmail.com"

// if (userEmail) {
//     console.log("Got an Email.");
    
// } else {
//     console.log("Do not have Email.");
    
// }

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// const emptyArr = []
// if (emptyArr.length === 0) {
//     console.log("Array is empty.");
// }

// const emptyObj = {}
// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty.");
    
// }

// Nullish Coalescing Operator (??): null undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator
// condition ? true : false syntax
const teaPrice = 100
teaPrice >= 80 ? console.log("more than 80") : console.log("less than 80");
teaPrice <= 80 ? console.log("more than 80") : console.log("less than 80");
