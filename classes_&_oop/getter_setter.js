class user {
    constructor(email , password){
        this.email = email;
        this.password = password;
    }
    
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    get password(){
        return `${this._password}Azaan`
    }

    set password(value){
        this._password = value
    }
}

const display = new user("Azaan.official17@gmail.com" , "abc")
console.log(display.password);
console.log(display.email);

