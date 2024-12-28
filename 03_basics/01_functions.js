// function sum(num1,num2){
//     console.log(num1+num2)
// }
// sum(2,4)        //here it will return 6

function sum(num1,num2){
    let result=num1+num2;
    console.log("You can see me")
    return result; 
    console.log("No you cant see me as im after 'return'")
}

const result =sum(2,4);
console.log(`Result is : ${result}`);

console.log("-----------------------------------")

function login(username){
    return `${username} just logged in`
}

console.log(login("Ashay"));

console.log("-----------------------------------")

function loginUser(Username){
    if(!Username){
        console.log("Please Enter username");
        return
    }
    return `${Username} Hey !! you just logged in`
}
console.log(loginUser());
console.log(loginUser("Ashay"));