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

console.log("--------------------------------------------");

const marvel=["thor","ironman","spiderman"];
console.log(marvel);
const dc=["batman","superman","flash"];
console.log(dc);

const allHeroes=marvel.concat(dc);
console.log(allHeroes);
//there is another way that is by spreading

const all_heroes=[...marvel, ...dc];
console.log(all_heroes);

// or can use another method, by using flat we can print all subarrays in a single array

const array2=[1,2,3,5,[4,7,8,9],5,3,[5,6,7,[9,6,4],4,6],5,3];
const array3=array2.flat(Infinity);
console.log(array3);

console.log(Array.isArray("Ashay"));
console.log(Array.from("Ashay"));       //breaks each elements in to single parts
console.log(Array.from({name:"Ashay"})) //intresting

// convert different variables into single array
let score=100;
let score2=200;
let score3=300;
console.log(Array.of(score,score2,score3));