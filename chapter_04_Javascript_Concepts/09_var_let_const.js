var v = 10;
let l = 30
const c = 3.4;


var browser = "chrome";
var browser = "firefox"; //Redeclaration

browser = "edge"; //Reassigned


//for, functions

var testCases = ["login", "signup", "Logout"];
for (var i = 0; i < testCases.length; i++) {
    console.log("Running test case: ", testCases[i]);
}



console.log("Loop Counter leaked Outside:", i);



console.log("Hi");
console.log("Hi");
console.log("Hi");

function say() {
    console.log("Hi from function");
}

say();

say();
