// Immediately Invoked Function Expression (IIFE)

// iife corrects syntax just by writing code in two parenthesis ()()
//("this is function")("this bracket is execution")

// Ans to give in Interview : global scope ke pollution se problem hoti hai kayi baar, us global scope ke variable ke pollution ko hatane ke liye iife ka use kiya

(function chai(){
    console.log("DB Connected");
})();

(function aurcode(){
    console.log("DB Connected 2");
})();
// if we use fat arrow function it will work same, by wiriting function name or leave it blank it will work same
(()=>{
    console.log(2+2)
})();

((name)=>{
    console.log(`Hi my name is ${name}`)
})("Ashay");