// where the condition is true by default

const userEmail="myemail@gmail.com";
if(userEmail){
    console.log("Got user email");
}
else{
    console.log("Don't have email id");
}

//tuthy values
// not an empty string such as "false", "0" will be true, " ", [emptry array], {empty object}, function(){}

//falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// to check object is empty or not
const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
}

//Nullish Coalescing Operator (??) : null undefined
// it prevents null or undefined value to execute rather it executes its alternate value or leftmost value

let val1;
// val1=5 ?? 10;
// val1=null ?? 10;
val1=null ?? 10 ?? 20;
console.log(val1);

//--------Terniary Operator----------
// format is ->     condition ? true : false

const iceTeaPrice=100;
iceTeaPrice>=80 ? console.log("less than 80") : console.log("more than 80");