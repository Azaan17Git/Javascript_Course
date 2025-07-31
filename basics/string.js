const name = "Azaan Manzoor"
const repoCount = 50

// console.log(name + repoCount); not use nowadays

console.log(`Hey, my name is ${name} & my repository count is ${repoCount}`);

const gameName = new String ("Babar Azam") //another way to declare string
console.log(gameName[4]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('z'));

const newString = gameName.substring(0,4)
console.log(newString);

const newStringOne = gameName.slice(-8,4)
console.log(newStringOne);

const anotherString = "   Afridi    "
console.log(anotherString);
console.log(anotherString.trim());

const url = "https://Azaan.com/Azaan%20Manzoor"
console.log(url.replace('%20', '-'));
console.log(url.includes('Lala'));
console.log(url.includes('Azaan'));









