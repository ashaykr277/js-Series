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
user.greeting=function(){
    console.log("hello user")
}
console.log(user.greeting());

user.greetings=function(){
    console.log(`hello user ${this.name}`)
}
console.log(user.greetings());