// for of - mainly for arrays, it can work on maps too but not objects
 const arr=[1,2,3,4,5,6,7];
 for(const num of arr){
    console.log(num)
 }

 const greetings = "helloworld"
 for(const greet of greetings){
    console.log(greet)
 }


 //Maps
const map=new Map();
map.set("IN", "India")
map.set("USA", "United State of America")
map.set("Fr", "France")
// console.log(map);

for(const [key, value] of map){
    console.log(key, "-", value)
}