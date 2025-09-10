// console.log(Math.PI)
// Math.PI = 5;
// console.log(Math.PI)

// const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descriptor);

const cricket = {
    name: "New Balance",
    Price: 250000,
    isAvailable:true,

    match: function(){
        console.log("Match has been cancled due to wet outfield.");
        
    }
}
// console.log(cricket);
// console.log(Object.getOwnPropertyDescriptor(cricket, "name"));

Object.defineProperty(cricket, "name" , {writable: false , enumerable: true , configurable: false})
console.log(Object.getOwnPropertyDescriptor(cricket, "name"));

for (let [key,value] of Object.entries(cricket)) {
    if (typeof  value !== "function") {
        console.log(`${key} : ${value}`);
    }
}