let a = 10; // Global Scope
console.log(a);


// Defining the function
function printHello() {
    console.log("Hello TheTestingAcademy!");
    let a = 20; // Local Scope
    console.log(a);
    if (true) {
        let a = 30;  // function scope
        console.log(a); // 30 function scope
    }
    console.log("F ->", a);
}

console.log("G ->", a);

printHello();