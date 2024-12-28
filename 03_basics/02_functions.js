function calculateCartPrice(num1){
    return num1;
}
console.log(calculateCartPrice(2));
//------------------------------------------------
function calculateCartPrice(...num1){
    return num1;
}
console.log(calculateCartPrice(2,3,4,5,67,7));


// passing object to javascript
const user ={
    username:"ashay",
    price:"199"
}
function handleObj(anyobj){
    console.log(`username is ${anyobj.username} and price is ${anyobj.price}`);
}
// handleObj(user);
//or can change directly by user here:
handleObj({
    username:"abcd",
    price:120

});

// return second value from array using functions
 const newArray=[100, 200, 300, 400, 500]
 function returnSecondArray(getArray){
    return getArray[1];
 }
 console.log(returnSecondArray(newArray));
 //or
 console.log(returnSecondArray([100,200,300,400,500]));