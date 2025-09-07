console.log("hello world");

let age = "33abc";

console.log(age);
let varname = Number(age);

console.log(typeof varname);
console.log(varname);

// 33abc -> nan (not a number)
// true--> 1; fals->0

let loged = 1;
let bolleanvalue = Boolean(loged);

console.log(typeof loged);
console.log(bolleanvalue);

// 1->true; 0-> false; ""-> false ; "sadhika"-> true

// --------------------------------------comparison-----------------------
// === is used to strictly compare and check the datatype of the variable.

//console.log("2" === 2);

//let sam ="hello everyone my name is "sadhika" and i am final year cse student".
//when we use double quote inside double quote it will throw error so to remove this we use backslash.
let sam = 'hello everyone my name is "sadhika" and i am final year cse student';
console.log(sam);

//extracting string character

//1. charAt
let sad = "heelo sadhika";
text = sad.charAt(1); //will return character at specified index(position) in a string.
console.log(text);

//2. charCodeAt
saa = sad.charCodeAt(1);
console.log(saa);
