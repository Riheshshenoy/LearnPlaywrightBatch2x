// Primitive vs Reference Types
let a = 20;
let b = a;
b = 40;
console.log(a);

// Objects — copied by REFERENCE , call by ref. 
// Reference - object, array, function
let obj1 = { val: 10 };
let obj2 = obj1;
obj2.val = 89;
console.log(obj1.val);