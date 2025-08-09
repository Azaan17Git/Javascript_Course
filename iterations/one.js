// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     if (element == 5) {
//         console.log("5 is best number.");
        
//     }
//     console.log(element);
// }

// for (let i = 0; i <=10; i++) {
//     console.log(`Outer loop values: ${i}`);
//     for (let j = 0; j <=10; j++) {
//         // console.log(`Inner loop values ${i} outer loop value ${j}`);
//         // console.log(i + '*' + j + '=' + i*j);
        
//     }
    
// }
let myArr = ["Babar", "Kholi", "AB De Villiers"]
console.log(myArr.length);

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element);
    
}

// break and continue

for (let index = 1; index <=20; index++) {    
    if (index == 5) {
        console.log("5 id detected.");
        break
    }
    console.log(`Value of i is : ${index}`);
}
for (let index = 1; index <=20; index++) {    
    if (index == 5) {
        console.log("5 id detected.");
        continue
    }
    console.log(`Value of i is : ${index}`);
}