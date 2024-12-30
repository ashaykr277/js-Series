const user={
    username:"Ashay",
    price:999,
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to the website`)     //here this will read the username from its parent scope that is user ={ }.
    }
}
user.welcomeMessage();
user.username="sam";        //this will update form current username
user.welcomeMessage();
//------------------------------------
console.log("----------------")
function hlo(){
    let username="Ashay"
    console.log(this.username);     //this will show undefined becouse, "this" is only used in object but this is function so it wont work, hence undefined
}
hlo();

// Arrow function
const addTwo=(a,b)=>{
    return a+b;
}
console.log(addTwo(2,3));

//it can also be written in single line
const sum2=(a,b)=> a+ b;

console.log(sum2(2,3));

// it can return objects too
const returnObj=()=>({username:"ashay"});

console.log(returnObj());
