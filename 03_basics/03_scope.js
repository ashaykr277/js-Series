let a=100;

if(true){
    let a=10;
    console.log("Inner : ", a);     // a inside {}is local scope or block scope and will be printed this.
}
console.log(a)      // this a is from global "a" that is 100;

//----------------------------------------

// function within a function is possible
//remember child can ask icecream from adults,adults cannot ask from child

function one(){
    const username="ashay";
    
    function two(){
        const website="youutube";
        console.log(username);
    }
    // console.log(website);       //this will throw an error as website is in scope and calling it is in outer of its scope
    two();
}
one()
//--------------------------------------

if(true){
    const username="ashay";
    if(username==="ashay"){
        const website=" youtube";
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

//----------------------------------------

console.log(addone(4));
function addone(num){
    return num+1
}

// javascript has power to store any json or functions or any thing in a variable.
const addTwo=function(num){
    return num+2;
}
console.log(addTwo(4));