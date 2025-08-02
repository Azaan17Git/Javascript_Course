function saymyname() {
    console.log("A");
    console.log("Z");
    console.log("A");
    console.log("A");
    console.log("N");
}
// saymyname()

function addTwonumbers(num1,num2) {   //Parameters

    // console.log(num1 + num2);
    // let result = num1 + num2
    // return result

    return num1 + num2
}

// addTwonumbers(7 , 9)     //Arguments

const result = addTwonumbers(5,5)
// console.log("Result:", result);

function LoggInUserMsg(username) {
    if (!username) {
        console.log("Please enter your username.");
        return
    }
    return `${username} just logged in.`
}
// console.log(LoggInUserMsg("Azaan"));

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200,400,600,800,1000));

const user = {
    username: "Azaan Manzoor",
    price: 566,
}

function handleObject(anyobj) {

      console.log(`Username is ${anyobj.username} & prices is ${anyobj.price}`);

}
// handleObject(user)
handleObject({
    username: "Azaan Manzoor",
    price: 999
})

const mynewArr = [200,400,600,800,1000]

function returnSecondValue(getArray) {
    return getArray[3]
}
console.log(returnSecondValue(mynewArr));
console.log(returnSecondValue([200,400,600,800,1000]));



