class user{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const display = new user("Azaan Manzoor")
console.log(user.createId());

class Teacher extends user{
    constructor(username , email){
        super(username)
        this.email = email;
    }
}
const displayTwo = new Teacher("Azaan Manzoor" , "Azaan.official17@gmail.com")
console.log(Teacher.createId());
