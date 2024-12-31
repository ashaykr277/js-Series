// IF statement

const score=200;
if(score<200){
    console.log("You Lose");
}
console.log("Continue to play")
//-------------------
const score2=200;
if(score2<=200){
    console.log("You won")
}
console.log("Continue to play")
//-----------------------------

const balance=1000;
if(balance<500){
    console.log("less than 500");
}
else if(balance<750){
    console.log("less than 750")
}
else{
    console.log("less than 1500")
}
//-----------------------------

// check through AND by using &&, both must apply
const userLoggedIn=true;
const debitCard=true;
if(userLoggedIn && debitCard){
    console.log("Allow user to shop")
}
// check through OR by using ||, any one must apply
const userLoginbyGoogle=true;
const userLoginbyEmail=true;
if(userLoginbyGoogle || userLoginbyEmail){
    console.log("You are successfully logged in")

}