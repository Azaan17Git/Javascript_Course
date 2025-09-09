function setUsername(username){
   this.username = username
   console.log("called.");
}

function createUsername(username , email , password) {
    setUsername.call(this , username)
    this.email = email
    this.password = password
}

const display = new createUsername("Azaan" , "Azaan.official17@gmail.com" , "123")
console.log(display);
