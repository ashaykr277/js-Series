// object literals
//in objects all key & values are string data types

// const mySymbol=Symbol("key1");

const user={
    name:"Ashay",
    age:22,
    "full name":"Ashay Kumar",
    // [mySymbol]:"myKey1",            //correct way to write symbol, hence it will counted as Symbol datatype not String
    location:"Rourkela",
    email:"ashay@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}


// console.log(user.email);
// console.log(user["email"]);
// console.log(user[mySymbol])
// console.log(typeof user[mySymbol])

// user.email="ashay@123.com"
// console.log(user["email"]);
// Object.freeze(user);        //freezes any changes to be made in object, allow no chnage to be made

// user.email="ashay@chatgpt.com"      //as above is freeze therefore no changes is allowed to be done
// console.log(user["email"]);
//----------------------------------------------------
// user.greeting=function(){
//     console.log("hello user")
// }
// console.log(user.greeting());

// user.greetings=function(){
//     console.log(`hello user ${this.name}`)
// }
// console.log(user.greetings());

console.log("------------part 2-----------");

const user2={};
user2.name="abcd";
user2.email="abcd@gmail.com";
// console.log(user2)

//----------------------

const JsUser={
    email:"ashaykr@gmail.com",
    fullname:{
        username:{
            firstname:"Ashay",
            lastname:"Kumar",
        }
    }
}
console.log(JsUser.fullname)
console.log(JsUser.fullname.username)
console.log(JsUser.fullname.username.firstname)

// how to join multiple objects in to a single object
const obj1={1:"a",2:"b"};
const obj2={3:"c",4:"d"};
const obj3=Object.assign({},obj1, obj2)     //extra {} at start means all data will come to this {}, is not added then all will come to obj1
console.log(obj3)
// or the best way is 
const obj4={...obj1, ...obj2}
console.log(obj4);

//if there is array of objects in database then how to access
const dbuser=[
    {
        name:"adam",
        email:"123@gmail.com"
    },
    {
        name:"bob",
        email:"456@gmail.com"
    },
    {
        name:"ces",
        email:"789@gmail.com"
    },
]
console.log(dbuser[1].email);

// to print all keys, values of an object
console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))       //converts pair of key value in arrays

// to check an object has its own property or not?
console.log(user.hasOwnProperty("isLoggedIn"))
console.log(user.hasOwnProperty("isLoggedOut"))
 