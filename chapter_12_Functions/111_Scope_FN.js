// Scope in Functions

let env = "staging";  // global scope

function setupConfig() {
    let timeout = 3000;   // local scope
    console.log(env);     // ✅ can access global
    console.log(timeout); // ✅ can access local
}


setupConfig();
console.log(env);
console.log(timeout);


// Out put will be undefined because timeout is not defined in global scope. It is only
// defined in local scope of setupConfig function.