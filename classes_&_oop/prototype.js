// let myName = "Azaan     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.azaan = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyAzaan = function(){
    console.log(`Azaan says hello`);
}

// heroPower.azaan()
// myHeros.azaan()
// myHeros.heyAzaan()
// heroPower.heyAzaan()

// inheritance

const User = {
    name: "Azaan",
    email: "Azaan.official17@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "Azaan Manzoor     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Azaan".trueLength()
"Manzoor".trueLength()