//object literals
const mySym = Symbol("key1")
const JsUser = {
    name: "Azaan Manzoor",
    age: 23,
    [mySym]: "mykey1",
    location: "Lahore",
    email: "Azaan.official17@gmail.com",
    isLoggedIn: true,
    lastLoggedIn: ["Saturday", "Sunday"],
}
// console.log(JsUser)
// console.log(JsUser.email)
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);
// JsUser.email = "Azaan3709@gmail.com"
// Object.freeze(JsUser)
// JsUser.email = "Azaan3709@gmail.com"

JsUser.greeting = function() {

    console.log("Hello, JS User");
    
}
JsUser.greetingTwo = function() {

    console.log(`Hello, JS User, ${this.name}`);
    
}
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

                //Object Singleton or Constructor

// const tinderUser = new Object()  //Singleton
// console.log(tinderUser);

const tinderUserOne = {} //Non-singular
tinderUserOne.id = '123abc'
tinderUserOne.name = "Azaan Manzoor"
tinderUserOne.isLoggedIn = false
// console.log(tinderUserOne);
//Both, Singleton & Non-singular objects shows the same empty brackets

const regularUser = {
    email: "Azaanofficial.17@gmail.com",
    fullname: {
           userfullname: {
            firstname: "Azaan",
            lastname: "Manzoor"
           }
    }
}
// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "c" , 4: "d"}
// const obj3 = Object.assign({}, obj1, obj2) not used generally
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "Azaanofficial.17@gmail.com"
    },
    {
        id: 1,
        email: "Azaanofficial.17@gmail.com"
    },
    {
        id: 1,
        email: "Azaanofficial.17@gmail.com"
    },
]
// users[2].email

// console.log(tinderUserOne);
// console.log(Object.keys(tinderUserOne));
// console.log(Object.values(tinderUserOne));
// console.log(Object.entries(tinderUserOne));
// console.log(tinderUserOne.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);