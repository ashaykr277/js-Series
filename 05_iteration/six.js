// filter - filters out following some conditions
// here either callback or arrow function will be used, for arrow function use implicit () or scope {}

/*
const myNums=[1,2,3,4,5,6,7,8,9]
const newNum=myNums.filter((num)=> num>4);      // this way can also be written
console.log(newNum);
// or
const nums=[1,2,3,4,5,6,7,8,9]
const Nums=nums.filter((num)=> {
    return num>4                    // if written in this way using scope, then add return before condtion 
});      
console.log(Nums);

// for example
const books=[
    {
        name:"Harry potter",
        genre:"fantasy"
    },
    {
        name:"jungle book",
        genre:"adventure"
    },
    {
        name:"GOT",
        genre:"drama"
    },
    {
        name:"Attack on Titan",
        genre:"dark fantasy"
    },
    {
        name:"Demon Slayer",
        genre:"fantasy"
    },

];

let userBook=books.filter((bk)=> bk.genre==="fantasy");
console.log(userBook);

userBook=books.filter((bk)=>{
    return bk.name==="Harry potter";
});
console.log(userBook)
*/

//------------- MAP ----------------
const num=[1,2,3,4,5,6,7];
const newNum=num.map((n)=>{return n+1});
console.log(newNum);


// we can use chaining such as we can use .map().map().filer() like this
const arr=[1,2,3,4,5];
const arr2=arr.map((n)=>(n*10))
.map((n)=>(n+1))
.filter((n)=> n<40);
console.log(arr2);


//------------- REDUCE ----------------
// uses accoumulator that store operation, and current value that is each elements of array
// 
const one=[1,2,3]
const init=0;
const Total=one.reduce(function (acc, currval){
    console.log(`acc : ${acc} and current value is ${currval}`)
    return acc+currval
},init)
console.log(Total); 

// reduce using arrow function
const arr3=[3,4,5,7,8];
const newArr=arr3.reduce((acc,curr)=> acc+curr,0);
console.log(newArr);

// another example
const shopCart=[
    {
        itemName:"js course",
        price:999
    },
    {
        itemName:"java course",
        price:2999
    },
    {
        itemName:"py course",
        price:6799
    },
    {
        itemName:"react course",
        price:9599
    },
]

const total=shopCart.reduce((acc,item) => acc+item.price,0);
console.log(total)