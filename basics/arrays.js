const arr = [0,1,2,3,4,5]
// console.log(arr);
// console.log(arr[3]);
// console.log(fvrtCricketers);

const myarr = new Array(1,2,3,4,5)
// myarr.push(6)
// myarr.pop()
// myarr.unshift(0)
// myarr.shift()
// console.log(myarr.includes(7));
// console.log(myarr.indexOf(5));

// const newarr = new myarr.join()
// console.log(myarr);
// console.log(newarr);

// console.log("A ", myarr);
// const myn1 = myarr.slice(1, 3)

// console.log(myn1);
// console.log("B ", myarr);

// const myn2 = myarr.splice(1, 3)
// console.log("C ", myarr);
// console.log(myn2);

const fvrtBatsmen = ["Babar", "Virat", "Root", "Rohit", "AB De Villiers"]
// console.log(fvrtBatsmen);
const fvrtBowlers = ["Bumrah", "Starc", "Shaheen", "Adil Rashid", "Wood"]
// fvrtBatsmen.push(fvrtBowlers)
const fvrtCricketers = fvrtBatsmen.concat(fvrtBowlers)
console.log(fvrtCricketers);

// const fvrtCricketers = [...fvrtBatsmen,...fvrtBowlers]
// console.log(fvrtCricketers); another way to merge the two arrays

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Azaan"))
console.log(Array.from("Azaan"))
console.log(Array.from({name: "Azaan"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));