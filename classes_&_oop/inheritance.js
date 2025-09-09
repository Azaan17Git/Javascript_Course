class user{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends user {
    constructor(username , email , password){
        super(username)
        this.email = email;
        this.password = password;
    }
    addcourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const displayOne = new Teacher("Azaan Manzoor" , "Azaan.official17@gmail.com" , "123")
displayOne.logMe()

const displayTwo = new user("Babar Azam")
displayTwo.logMe()
console.log(displayOne instanceof user);