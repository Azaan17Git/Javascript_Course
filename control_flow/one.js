// const temperature = 30
// if (temperature === 40) {
//     console.log("Today is Hot.");
// } else {
//     console.log("Today is not Hot.");
// }

// <, >, <=, >=, ==, !=, ===, !== operators

// const score = 200
// if (score > 100) {
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);

// const balance = 750
// if (balance > 500) console.log("test") , console.log("test2")   //implicit scope //not the right way to write code

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance <= 750){
//     console.log("less than 750");
// } else if (balance < 900){
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true

if (userLoggedIn && debitCard) {
    console.log("Allow to buy courses.");
}
// if (userLoggedIn && debitCard && 2===3) {
//     console.log("Allow to buy courses.");
// } if any condition is false it will not show any output

const loggedInFromGoogle = false
const loggedInFromEmail = true

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("Logged in Successfully.");
}