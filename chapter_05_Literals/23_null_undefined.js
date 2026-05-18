// =====================================================
// Null vs Undefined in JavaScript
// =====================================================

/*
 * What is undefined?
 * ------------------
 * - undefined means a variable has been declared but has NOT been assigned a value yet.
 * - It is automatically assigned by JavaScript.
 * - It means "value does not exist" or "not initialized".
 *
 * What is null?
 * -------------
 * - null is an assignment value that represents "no value" or "empty value".
 * - It is intentionally assigned by the programmer.
 * - It means "there is no object here" or "nothing".
 *
 * SIMPLE DIFFERENCE:
 * ------------------
 * | undefined | JavaScript says: "I don't have a value for this" |
 * | null      | Programmer says: "I want this to have no value"  |
 */

// ------------------------------
// 1. undefined examples
// ------------------------------

let name;
console.log("1. Uninitialized variable:", name); // Output: undefined

let age;
console.log("2. Declared but not assigned:", age); // Output: undefined

function greet() {
    // no return statement
}
console.log("3. Function with no return:", greet()); // Output: undefined

let person = {};
console.log("4. Missing property:", person.city); // Output: undefined

// ------------------------------
// 2. null examples
// ------------------------------

let selectedUser = null;
console.log("5. Explicitly set to null:", selectedUser); // Output: null

let data = { value: "important" };
data = null; // programmer decides to clear the value
console.log("6. Cleared by programmer:", data); // Output: null

// ------------------------------
// 3. typeof comparison
// ------------------------------

console.log("\n--- typeof comparisons ---");
console.log("typeof undefined:", typeof undefined); // "undefined"
console.log("typeof null:", typeof null);         // "object" (this is a known JS bug!)

// ------------------------------
// 4. Equality comparison
// ------------------------------

console.log("\n--- equality comparisons ---");
console.log("null == undefined:", null == undefined);   // true (loose equality)
console.log("null === undefined:", null === undefined); // false (strict equality)

// ------------------------------
// 5. Practical example
// ------------------------------

console.log("\n--- practical example ---");

let userProfile;        // undefined - user hasn't filled profile yet
let deletedProfile = null; // null - user deleted their profile

function checkProfile(profile) {
    if (profile === undefined) {
        return "Profile not created yet";
    } else if (profile === null) {
        return "Profile was deleted";
    } else {
        return "Profile exists: " + profile;
    }
}

console.log(checkProfile(userProfile));    // "Profile not created yet"
console.log(checkProfile(deletedProfile)); // "Profile was deleted"
console.log(checkProfile("John"));         // "Profile exists: John"

// ------------------------------
// 6. Key Differences Summary
// ------------------------------

/*
 * +------------------+----------------------------+---------------------------+
 * | Feature          | undefined                  | null                      |
 * +------------------+----------------------------+---------------------------+
 * | Meaning          | Variable declared but not  | Intentional absence of    |
 * |                  | assigned a value           | any value                 |
 * | Set by           | JavaScript automatically   | Programmer manually       |
 * | Type             | undefined                  | object (bug in JS)        |
 * | Use case         | Default uninitialized state| Explicitly clear a value  |
 * +------------------+----------------------------+---------------------------+
 */
