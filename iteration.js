//++++++++++++++++++++++++++++++++++for loop++++++++++++++++++++++++++++++++==++++++++++

// for (let i = 0; i < 10; i++) {
//   const element = i;
//   console.log(element);
// }

//+++++++++++++++++++++++++++++++++if inside for loop+++++++++++++++++++++++++++

// for (let i = 0; i < 10; i++) {
//   const element = i;
//   if (element == 5) {
//     console.log("five");
//   }
//   console.log(element);
// }

// ++++++++++++++++++++++++for inside forloop++++++++++++++++++++++++++++++++

// for (let i = 0; i < 10; i++) {
//   console.log(`outer loop: ${i}`);
//   for (let j = 0; j < 10; j++) {
//     //console.log(`innerloop:${j} and outer loop ${i}`);
//     console.log(i + "*" + j + "=" + i * j);
//   }
// }

//++++++++++++++++++++++++++++++++++++++array in for lopp++++++++++++++++++++++++++++=

// let array = ["sadhika", "shruti", "priyanka"];
// console.log(array.length);
// for (let i = 0; i < array.length; i++) {
//   const element = array[i];
//   console.log(element);
// }

////++++++++++++++++++++++=====break and continue ++++++++++++++++++++++++++++++++++
//break mae control flow bahar nikal jata hai and continue mae control flow skip kar deta hai or vapis loop mae chala jata hai.

// for (let i = 0; i < 10; i++) {
//   const element = i;
//   if (element == 5) {
//     console.log("five");
//break; //break will break the control flow and will come out of the loop
//continue;  //continue will skip he control flow and will go back to the loop
//   }
//   console.log(element);
// }

//+++++++++++++++++++++++++++++++++++++while loop++++++++++++++++++++++++++++++++++++++
// array = ["sadhika", "shruti", "priyanka"];
// let i = 0;
// while (i <= 10) { //while loop will run until the conditio is true.
//   console.log(`value of index is ${i}`);
//   i = i + 2;
// }

//+++++++++++++++++++++++++++++++++++++do while loop++++++++++++++++++++++++++++++++++++++
// let h = 1;

// do {
//   console.log(`score is ${h}`);
//   h++;
// } while (h <= 10);  //do while loop will run atleast once even if the condition is false which means we will get some output atleast once

//+++++++++++++++++++++++++++++++++++for of loop ++++++++++++++==========================

// array = ["sadhika", "shruti", "priyanka", "sakshi"];
// for (const arr of array) {
//   console.log(arr); //for of loop is used to iterate over the array. matlab array mae jo bhi elements honge vo unko print karega.
// }

//we can also do this for the string

// let string = "sadhika";
// for (const str of string) {
//   console.log(str);
// }

//++++++++++++++++++++++++++++++++++++map++++++++++++++++++++++++++++++++++++++++++++++++++++++
//map is uesd to iterate over an array and perform some operation on it. it returns a key value pair and unique key is assigned to each element.

// const map = new Map();
// map.set("in", "india");
// map.set("us", "united states");
// map.set("uk", "united kingdom");
// map.set("jp", "japan");
// map.set("in", "india");

// console.log(map);

// //for of loop
// for (const [key, value] of map) {
//   console.log(key, ":--", value);
// }

//++++++++++++++++++++++++++++++++++++for in loop++++++++++++++++++++++++++++++++++++++++++++++
//for in loop can also be used for the array but it will return the index of the aaray.
//for in loop can also be used for the string but it will return the index of the string.
//for in loop can also be used for the map but it will return the key of the map.

// const myobj = {
//   js: "javascript",
//   py: "python",
//   c: "c++",
//   java: "java",
//   ruby: "ruby",
// };

// for (const key in myobj) {
//   console.log(`${key} is short for: ${myobj[key]}`);
// }

// let ary = ["sadhika", "shruti", "priyanka", "sakshi"];
// for (const key in ary) {
//   console.log(key);
// }

//+++++++++++++++++++++++++++++++++++++forEach loop +++++++++++++++++++++++++++++++++++++++++++++++

let array = ["sadhika", "shruti", "priyanka", "sakshi"];

// array.forEach(function (val) {  //it will use the callback function which means it will call the function for each element of the array and will not need to use the function name.
//   console.log(val);
// });

//we can also use arrow function in forEach loop

array.forEach((val, index) => {
  console.log(val, index);
}); //it will also return the index of the array.

//filter is used to filter the array based on the conditionn and it will return the new array based on the condition.
//for each loop will not return anything but it will just iterate over the array and perform soe operation on it.
// whereas fiter will return the new array based on the condition.
