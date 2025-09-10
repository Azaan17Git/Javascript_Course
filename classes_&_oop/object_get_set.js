const user = {
    _email: "Azaan.official17@gmail.com",
    _password: "abc",

    get email(){
          return  this._email.toUpperCase()
    },

    set email(value){
      this._email = value
    },

    get password(){
          return  this._password.toUpperCase()
    },

    set password(value){
      this._password = value
    }
}

const display = Object.create(user)
console.log(display.email);
console.log(display.password);

