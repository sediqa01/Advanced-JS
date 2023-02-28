// vanial JS

let arr1 = [1, 2, 3];
let arr2 = arr1;

arr2.push(4);
console.log(arr1);
console.log(arr2);

// ES6
console.log(".........................");
let arr4 = [5, 6, 7];
let arr5 = [...arr4];

arr5.push(8);
console.log(arr4);
console.log(arr5);

//object
let obj1 = {a:1, b:2, c:3};
let obj2 = {...obj1, d:4};

console.log(obj1);
console.log(obj2);