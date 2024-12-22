const name="Ashay"
const repoCount=50;
console.log(`Hello my name is ${name} and my rep0 count is ${repoCount} `);
//------------------------
const gameName= new String("ashaykr");
console.log(gameName[0]);
console.log(gameName[4]);
console.log(gameName[8]);


console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('r'));

const newString= gameName.substring(0,5);
console.log(newString);

const anotherStr= gameName.slice(-6,5);
console.log(anotherStr);

const newStr="  abcd      "
console.log(newStr);        //with spaces
console.log(newStr.trim()); //trims spaces

const url="www.ashaykr.com/anisfc0&6ienla0=%ashaykr277"
console.log(url.replace('%','-')
)