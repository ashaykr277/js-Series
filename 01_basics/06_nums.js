const score =100;
console.log(score);
//----------------------
const balance = new Number(1000);
console.log(balance);               //it tells it is a number

console.log(balance.toString().length)      //converts to string and tells its length
console.log(balance.toFixed(1))             //will give 1 decimal points after it
console.log(balance.toFixed(2))             //will give 2 decimal points after it

const otherNumber = 23.8966
const otherNumber2 = 23.8966
const otherNumber3 = 23.8966
console.log(otherNumber.toPrecision(3))     //will show only three number
console.log(otherNumber2.toPrecision(4))     //will show only three number
console.log(otherNumber3.toPrecision(2))     //will show only three number

const hundreds=1000000;
console.log(hundreds.toLocaleString());          //will add comas 
console.log(hundreds.toLocaleString('en-IN'));   //will add comas in indian system

//+++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++

console.log(Math); 
console.log(Math.abs(-4));          //converts only -ve to +ve not vice versa
console.log(Math.round(4.3));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));
console.log(Math.min(4,2,3,8));
console.log(Math.max(4,2,3,8));

console.log(Math.random());
console.log((Math.random()*10)+1);              //+1 will avoid occuring of 0 as 0.somenumber will ocur +1 will add 1 to it
console.log(Math.floor(Math.random()*10)+1);    //math.floor will show only leftmost number

//occur any random number between 10 - 20.
const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+1);       // here 1 is only 0 can't occur else any other can. hence min is 1
console.log(Math.floor(Math.random()*(max-min+1))+min);     //+min will give min number must be 10 i.e start from 10, hence min is 10.