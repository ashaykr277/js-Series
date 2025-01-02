// const coding =['java','python', 'c', 'c++', 'ruby']
// coding.forEach(function(items){     // this function is called callback function, where is written as same function, but only without a function name rest is same
//     console.log(items)
// });

//---------
const myCoding=[
    {
        lang:"javascript",
        langFileName:"js"
    },
    {
        lang:"java",
        langFileName:"java"
    },
    {
        lang:"python",
        langFileName:"py"
    },
    {
        lang:"c++",
        langFileName:"cpp"
    },
]
myCoding.forEach((item)=>{
    console.log(item.lang);
})