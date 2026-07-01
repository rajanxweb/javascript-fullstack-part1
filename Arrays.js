let arr1 = [21,4,5,6,8];
console.log(arr1[0]);
console.log(arr1.length);
arr1.push(5);
console.log(arr1);
arr1.pop();
console.log(arr1);
arr1.shift();
console.log(arr1);
arr1.unshift(5);
console.log(arr1);
let arr2 = [3,3,6,78,8,5];
let arr3 = arr1.concat(arr2);
console.log(arr3);

arr3.sort(arr3.begin, arr3.end);
console.log(arr3);