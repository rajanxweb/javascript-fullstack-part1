if(true){
    var name = "rajan";
}
console.log(name);

if(true){
    let time = 0;
    console.log(time);
}
//console.log(time);

const a = 0;
//a++;
//console.log(a);

let  m= 3;
let n = 5.5;
let o = "some string";
let p = 'a';
let q = null;
let r = undefined;
let s = {
    "name ": "Rajan yadav",
    "position": "SDE",
    "salary" : "50lpa"
}

console.log(m,n,o,p,r,s);
console.log(typeof m , typeof n, typeof o , typeof p , typeof q , typeof r, typeof s);



// for in and for of loop

let obj = {
    "country": "India",
    "location": "Ramkola"
}
for(const me in obj){
    console.log(me, obj[me]);
}

for (const me in "Rajan"){
    console.log(me);
}

// functions 

function sum(a, b){
    return a+b;
}

let result = sum(4,6);
console.log(result);