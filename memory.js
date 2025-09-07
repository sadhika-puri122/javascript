// stack (primitive) memory, heap(non-primitive) memory is used.
let name = "hellosadhika";
let another = name;
another = "byesadhika";

//console.log(name);
//console.log(another);

// when we take something in stack and then we get its copy not the orginal one.
// but when we take something in heap we get its reference.

let userone = {
  email: "goggle@2022.com",
  upi_id: "hello@123",
};

let usertwo = userone;

usertwo.email = "sadhikapuri@gmail.com";

//console.log(usertwo.email);
//console.log(userone.email);

//+++++++++++++++++++++++++++++++++++++++++math++++++++++++++++++++++++++++++++++

//console.log(Math.random());   // random has range from 0 to 1 only
//console.log((Math.random()*10 )+1);

// const min = 100;
// const max = 200;

//console.log(Math.floor(Math.random() * (min-max+1) + min))

//array

// let myarr = [0, 1, 2, 3, 4, 5];
// const myn1 = myarr.slice(1, 3);
// console.log(myn1);

// console.log("b", myarr);

// const myn2 = myarr.splice(1, 3);
// console.log(myn2);
// console.log("a", myarr);

// let arr = [1, 2, [3, 4, 5], 6, [1, 6, 7], 4, [1, 3]];
// const arr1 = arr.flat(); //newarray is created by concatenating the sub array
// console.log(arr1);

// let i = "sadhika"
// console.log(Array.from("sadhika")); //convert the string or any other datatype to the array

// let score1 = 100;
// let score2 = 200;
// let score3 = 300;
// const arr = Array.from([score1, score2, score3]);
// console.log(arr);

//object

//object literals

// how we declare the object

// const user = {
//   name: "sadhika",
//   age: 21,
//   location: "bilaspur",
// };

// console.log(user.name)
// console.log(user["name"])

// user.name = "sadhika Puri"; //to change the value of the object

// console.log(user.name)

// Object.freeze(user); //to frreze the change made to the object which means if we change something it will not change and remains the same

// user.age = "22";
// console.log(user["age"]) // the value of age does not change and remains same ie.21

//object constructor
// const userobject = {};
// userobject.id = "123abc";
// userobject.name = "sadhika";

//console.log(userobject);

//object under object

// const regularuser = {
//   email: "shruti@gmail.com",
//   rusername: {
//     regularuserfullname: {
//       rfirstname: "shruti",
//       rlastname: "puri",
//     },
//   },
// };

// console.log(regularuser.rusername.regularuserfullname.rlastname)

//object assign
//it is a static object method that copies  all proprerties from one or more source object.

// const target = { a: 1, b: 2, c: 3 };
// const source = { d: 4, e: 5 };

// const final = Object.assign({}, target, source);

// console.log(final);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const person = {
//   first_name: "sadhu",
//   last_name: "puri",
//   email: "sadhu@gmail.com",

//   fullname: function () {
//     return this.first_name + " " + this.last_name;
//   },
// };

// console.log(person.fullname())

// ///////////////////////////destructuring////////////////////////////////////
// const cousre = {
//   name_course: "js",
//   price: "999",
//   couseinstructor: "sadhika",
// };
// // destructuring object
// const { couseinstructor: instructor } = cousre;

// console.log(instructor);
