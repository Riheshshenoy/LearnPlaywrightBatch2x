let a, b, c;

a = [1, 2, 3];
b = [4, 5, 6];
c = [7, 8, 9, 10, 11, 12, 13];


f = a.concat(b);
console.log(f);


let d = [...a, ...b, ...c];
console.log(d);



let s = ["Pass", "Fail", "Skip"];
let result = s.join("/");
console.log(result);