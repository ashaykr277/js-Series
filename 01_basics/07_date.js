let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof(myDate))

// const myCreatedDate = new Date(2023, 0, 14)      //in JS Jan starts from 0 as yyyy, m, dd
const myCreatedDate = new Date("2023-01-14")        //in This layout "yyyy-mm-dd" 01 is january
console.log(myCreatedDate.toDateString());

const myTimeStamp=Date.now();
console.log(myTimeStamp);                            //here Date.now is time in milliseconds since 1970
console.log(Math.floor(myTimeStamp/1000));          

let newDate=new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());