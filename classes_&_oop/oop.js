// const User = {
//     username: "Azaan Manzoor",
//     loginCount: 5,
//     SignedIn: true,

//     getUserdeatils: function () {
//         console.log("Got User details.");
//         console.log(`Username: ${this.username}`);
        
//     }
// }

// console.log(User.username)
// console.log(User.getUserdeatils());
// console.log(this);
// console.log(User.getUserdeatils());

function User(username , loginCount , isLoggedin) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedin = isLoggedin;

    this.greeting = function() {
        console.log(`Welcome ${this.username}`);
    }
    return this
}

const UserOne = new User("Azaan" , 10 , true)
const UserTwo = new User("Babar" , 56 , false)
console.log(UserOne);
console.log(UserTwo);
console.log(User.constructor);


