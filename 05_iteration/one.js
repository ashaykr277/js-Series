//  for loop

//  for(let i=0; i<=10;i++){
//    const ele=i;
//    if(ele==5){
//       console.log("5 is the best number")
//    }
//     console.log(ele);
//  }

 //-------- nested loop& its working -----------

//  for(let i=1; i<=4;i++){
//     console.log(`Outer Loop : ${i}`);
//    for(let j=1;j<2;j++){
//       console.log(`Outer loop : ${i} and inner loop is ${j}`);
//    }
//  }


//for example 
 for(let i=1; i<=50;i++){
    console.log("-----------------")
    console.log(`Table for : ${i}`);
    console.log("-----------------")
   for(let j=1;j<10;j++){
      // console.log(`Outer loop : ${i} and inner loop is ${j}`);
      console.log(i + "x" + j+ "="+ i*j);
   }
 }

let myArray1 = ["flash", "batman", "superman"]
console.log(myArray1.length);
for(let index=0; index<myArray1.length; index++){
   const element = myArray1[index];
   console.log(element);
}


// break and continue 

console.log('--------break--------')
for(let i=0;i<=20;i++){
   if(i==5){
      
      console.log("Detected 5");
      break;
   }
   console.log(`Value of i is ${i}`);
}

console.log('--------continue--------')

for(let i=0;i<=20;i++){
   if(i==5){
      
      console.log("Detected 5");
      continue;
   }
   console.log(`Value of i is ${i}`);
}