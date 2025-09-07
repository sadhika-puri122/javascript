// immediately invoked function expression(IIFE)
// (due to global scope pollution problem we used IIFE)

(function chai(){     //named IIFE
    console.log("hello sadhika")
})();

//or 
( (name) =>{
    console.log(`hello ${name}`)
})("sadhika puri")

