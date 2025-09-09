// class User {
//     constructor(username , email , password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const display = new User("Azaan Manzoor" , "Azaan.official17@gmail.com" , "123")
// console.log(display.encryptPassword());
// console.log(display.changeUsername());

// behind the scene

function User(username , email , password){
   this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
     return `${this.password}abc`
}

User.prototype.changeUsername = function(){
     return `${this.username.toUpperCase()}`
}

const displayTwo = new User("Babar Azam" , "King56@gmail.com" , "565656")
console.log(displayTwo.encryptPassword());
console.log(displayTwo.changeUsername());

