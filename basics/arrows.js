const user = {
    username: "Azaan Manzoor",
    price: 999,

    welcomeMsg: function () {
        console.log(`${this.username},welcome to the website`);
        console.log(this);
    }
}

// user.welcomeMsg()
// user.username = "Uzair"
// user.welcomeMsg()
// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}
// chai()

// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }
// console.log(addTwo(5,5)); explicit return

// const addTwo = (num1 , num2) => num1 + num2
// console.log(addTwo(2,2));  Implicit return

// const addTwo = (num1 , num2) => (num1 + num2)
// console.log("result:", addTwo(4,7)); widely used in REACT 

// const addTwo = (num1, num2) => {username: "Azaan Manzoor"}
// console.log(addTwo(3, 4)) cannot return object because parenthesis are not there

const addTwo = (num1, num2) => ({username: "Azaan Manzoor"})
console.log(addTwo(3, 4))



