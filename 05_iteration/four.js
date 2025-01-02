// for in - used in objects for iteration but gives not exact key value but its first letter or index in array
const myObj={
    game1:"gta",
    game2:"nfs",
    game3:"assassins creed"
}
for(const key in myObj){
    console.log(`${key} shortcut is for ${myObj[key]}`);
}

const array=["java", "html", "css", "javascript"];
for (const key in array) {
        console.log(array[key]);   
    }


// testing "for in" to maps
// but it wont give output it only works for "for of"
const map=new Map();
map.set("IN", "India")
map.set("USA", "United State of America")
map.set("Fr", "France")
// console.log(map); 

for(const key in map){
    console.log(key); 
}
