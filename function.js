function sadhu(a, b) {
  num = a * b;

  return num;
}

console.log(sadhu(1, 2));

// function addtwonum(num1, num2) {
//   const result = num1 + num2;
//   return result;
// }

// result = addtwonum(3, 5);
//console.log("result:", result)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++
// function one() {
//   const username = "sadhika";

//   function two() {
//     const youtube = "website";
//     console.log(username);
//   }
//   //console.log(youtube);

//   two();
// }
// one();

// //++++++++++++++++++++++++++++++++function declaration types++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
// // javascript Hoisting(default behaviour of moving all declaration to the top of the current scope)
// // to avoid bugs always declare variables at the top of the every scope

// console.log(addone(5));
// function addone(value) {
//   return value + 1;
// }
// //addone(5) //if this we  before the declaration it will be executed

// //console.log(addtwo(5))
// const addtwo = function (value) {
//   //expression
//   return value + 2;
// };
// console.log(addtwo(5)); // but if we put this before the declaration it will not be executed and will throught the error.

//++++++++++++++++++++++++++++this keyword(to refer current context)+++++++++++++++++++++++++++++++++++++++++++++++++++++

// const user = {
//   username: "sadhika",
//   price: 999,

//   welcomeuser: function () {
//     console.log(`${this.username}, welcome to my website`);
//   },
// };
// user.welcomeuser();
// user.username = "shruti";
// user.welcomeuser();
