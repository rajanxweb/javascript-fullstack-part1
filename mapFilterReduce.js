let arr1 = [3,5,678,73];

//map
let newArr = arr1.map((e)=>{
    return e**2;
})

console.log(newArr);
//filter
let tempArr = arr1.filter((e)=>{
    if(e>7){
        return true;
    }
    return false;
});

console.log(tempArr);

//reduce
const red = (e)=>{
    return e**2;
}
console.log(arr1.reduce(red));

Array.from["rajan"];
//console.log(Array);