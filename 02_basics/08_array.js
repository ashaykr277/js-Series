const myArr=[0,1,2,3,4,5];
console.log(myArr[3]);

//array methods
myArr.push(6);
myArr.push(7);
myArr.pop()
console.log(myArr);

myArr.unshift(9);   //adds element always at 1st index
myArr.shift()       //removes the new added element at 1st index.
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr=myArr.join();
console.log(myArr);
console.log(newArr);

// slice, splice
console.log("A", myArr);
const myn1=myArr.slice(1,3);    //slices from 1st index till before 3rd index

console.log(myn1); 
console.log("B", myArr);

console.log("C", myArr); 
const myn2=myArr.splice(1,3);      //cuts out from 1st to 3rd.
console.log(myn2); 