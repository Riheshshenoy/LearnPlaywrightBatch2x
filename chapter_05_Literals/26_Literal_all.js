// Lab 26: JavaScript Number Literals - All Types
// JavaScript has a single Number type (IEEE 754 double-precision 64-bit floating point)

console.log("=== 1. Integer Literals (Decimal) ===");
let decimal = 42;
console.log("Decimal:", decimal, "| Type:", typeof decimal);

console.log("\n=== 2. Floating Point Literals ===");
let float = 3.14159;
let floatZero = 0.5;
let floatNoLeading = .75;
let floatNoTrailing = 5.;
console.log("Float:", float, "| Type:", typeof float);
console.log("Zero leading:", floatZero, "| No leading zero:", floatNoLeading, "| No trailing:", floatNoTrailing);

console.log("\n=== 3. Binary Literals (0b or 0B) ===");
let binary = 0b1010;
console.log("Binary 0b1010:", binary, "| Type:", typeof binary);

console.log("\n=== 4. Octal Literals (0o or 0O) ===");
let octal = 0o17;
console.log("Octal 0o17:", octal, "| Type:", typeof octal);

console.log("\n=== 5. Hexadecimal Literals (0x or 0X) ===");
let hex = 0xFF;
console.log("Hex 0xFF:", hex, "| Type:", typeof hex);

console.log("\n=== 6. Exponential Notation ===");
let exp1 = 1.5e3;   // 1500
let exp2 = 1.5e-3;  // 0.0015
console.log("1.5e3:", exp1, "| 1.5e-3:", exp2);

console.log("\n=== 7. BigInt Literals (n suffix) ===");
let big = 9007199254740991n;
let bigHex = 0x1fffffffffffff n;
console.log("BigInt:", big, "| Type:", typeof big);
console.log("BigInt Hex:", bigHex, "| Type:", typeof bigHex);

console.log("\n=== 8. Special Numeric Values ===");
console.log("Infinity:", Infinity, "| Type:", typeof Infinity);
console.log("-Infinity:", -Infinity, "| Type:", typeof -Infinity);
console.log("NaN (Not a Number):", NaN, "| Type:", typeof NaN);

console.log("\n=== 9. Number Object Wrapper ===");
let numObj = new Number(123);
console.log("Number Object:", numObj, "| Type:", typeof numObj);
console.log("Primitive value:", numObj.valueOf());

console.log("\n=== 10. Number.MIN_VALUE & Number.MAX_VALUE ===");
console.log("Min Safe Integer:", Number.MIN_SAFE_INTEGER);
console.log("Max Safe Integer:", Number.MAX_SAFE_INTEGER);
console.log("Min Value:", Number.MIN_VALUE);
console.log("Max Value:", Number.MAX_VALUE);
console.log("EPSILON:", Number.EPSILON);
