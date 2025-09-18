console.log("hi sadhika"); //syncronous code it will directly enter into the call stack

// asynchronous code, it will be handed over to the web api and after the time is completed it will enter
// into the callback queue and the event loop will check if the call stack is empty and then it will enter
// into the call stack and execute the code.
function hi() {
  console.log("hi shruti");
}
setTimeout(() => {
  hi;
}, 1000);
setTimeout(hi, 1000);
// after the time is completed the function hi will be called after the call stack is empty
//this asynchronous code is handled by the web api of the browser at the background beside that the synchronous code is executed

//this is again a synchrounous code, it will be executed directly into the call stack when the asynchronous code
//  is handed over to the web api this code will enter the call stack and will be executed.

console.log("bye sadhika");

//output of this code will be

//hi sadhika
//bye sadhika
//hi shruti(after 1second)

//output explanation
//1. first the synchronous code will be executed and the asynchronous code will be handed over to the web api
//2. after the synchronous code is executed the event loop will check if the call stack is empty and then the
//3. asynchronous code will enter the call stack and will be executed.
//4. so the output will be hi sadhika, bye sadhika, hi shruti(after 1second)
