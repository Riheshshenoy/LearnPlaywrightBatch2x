// Config / Reference file for == (Loose Equality) vs === (Strict Equality)
// This file demonstrates various comparison scenarios in JavaScript

// ==========================================
// BASIC RULE
// ==========================================
// ==  -> Checks value only (performs type coercion if types differ)
// === -> Checks value AND type (no type coercion)

console.log("===== Basic Number vs String =====");
console.log(5 == "5");    // true  -> string "5" coerced to number 5
console.log(5 === "5");   // false -> different types (number vs string)

console.log(0 == "0");    // true
console.log(0 === "0");   // false

console.log("===== Boolean Comparisons =====");
console.log(true == 1);   // true  -> true coerced to 1
console.log(true === 1);  // false -> different types

console.log(false == 0);  // true  -> false coerced to 0
console.log(false === 0); // false -> different types

console.log(true == "1");   // true
console.log(true === "1");  // false

console.log(false == "");   // true
console.log(false === "");  // false

console.log("===== null and undefined =====");
// Special case: null == undefined is true, but null === undefined is false
console.log(null == undefined);   // true  -> special rule in JS
console.log(null === undefined);  // false -> different types

console.log(null == null);        // true
console.log(null === null);       // true

console.log(undefined == undefined);   // true
console.log(undefined === undefined);  // true

// null/undefined do NOT coerce to 0, false, or "" with ==
console.log(null == 0);           // false
console.log(undefined == 0);      // false
console.log(null == false);       // false
console.log(undefined == false);  // false
console.log(null == "");          // false
console.log(undefined == "");     // false

console.log("===== Empty String / Zero / false =====");
console.log(0 == false);      // true
console.log(0 === false);     // false

console.log("" == false);     // true
console.log("" === false);    // false

console.log(0 == "");         // true
console.log(0 === "");        // false

console.log("===== NaN (Not a Number) =====");
// NaN is NEVER equal to anything, including itself!
console.log(NaN == NaN);      // false
console.log(NaN === NaN);     // false

console.log(NaN == "NaN");    // false
console.log(NaN === "NaN");   // false

// Use Number.isNaN() to check for NaN
console.log(Number.isNaN(NaN)); // true

console.log("===== Object Comparisons =====");
// Objects are compared by reference, NOT by value
let obj1 = { a: 1 };
let obj2 = { a: 1 };
let obj3 = obj1;

console.log(obj1 == obj2);    // false -> different references
console.log(obj1 === obj2);   // false -> different references

console.log(obj1 == obj3);    // true  -> same reference
console.log(obj1 === obj3);   // true  -> same reference

console.log("===== Array Comparisons =====");
// Arrays are also objects -> compared by reference
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
let arr3 = arr1;

console.log(arr1 == arr2);    // false -> different references
console.log(arr1 === arr2);   // false -> different references

console.log(arr1 == arr3);    // true  -> same reference
console.log(arr1 === arr3);   // true  -> same reference

console.log("===== Array == String =====");
// Array coerces to string by joining elements with commas
console.log([1, 2, 3] == "1,2,3");   // true
console.log([1, 2, 3] === "1,2,3");  // false

console.log([] == "");       // true  -> empty array becomes empty string
console.log([] === "");      // false

console.log([0] == "0");     // true
console.log([0] === "0");    // false

console.log("===== Object == Primitive =====");
// Object coerces to primitive via toString() or valueOf()
console.log([1] == 1);       // true  -> [1] becomes "1" then 1
console.log([1] === 1);      // false

console.log("===== Tricky / Edge Cases =====");
console.log("0" == false);       // true  -> both coerce to 0
console.log("0" === false);      // false

console.log("1" == true);        // true  -> both coerce to 1
console.log("1" === true);       // false

console.log("" == 0);            // true  -> "" coerces to 0
console.log("" === 0);           // false

console.log("" == []);           // true  -> [] coerces to ""
console.log("" === []);          // false

console.log(0 == []);            // true  -> [] coerces to "" then 0
console.log(0 === []);           // false

console.log("===== Negative Zero =====");
console.log(0 == -0);            // true
console.log(0 === -0);           // true

console.log("===== Infinity =====");
console.log(Infinity == Infinity);    // true
console.log(Infinity === Infinity);   // true

console.log("===== BEST PRACTICE =====");
// Always use === and !== to avoid unexpected type coercion bugs
// Use == only if you explicitly intend to allow type coercion
