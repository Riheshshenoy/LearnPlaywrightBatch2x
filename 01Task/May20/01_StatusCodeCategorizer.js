/*
Question 1 — HTTP Status Code Categorizer

Problem: Given an HTTP status code, print which category it belongs to.



200–299 → Success



300–399 → Redirection


400–499 → Client Error


500–599 → Server Error


Anything else → Invalid

Sample Input/Output:

Input: 404
Output: Client Error

Input: 200
Output: Success
*/



let codes = 404;

if (codes >= 200 && codes <= 299) {
    console.log("success");
}


else if (codes >= 300 && codes <= 399) {
    console.log("redirection");
}
else if (codes >= 400 && codes <= 499) {
    console.log("client error");
}
else if (codes >= 500 && codes <= 599) {
    console.log("server error");
}
else {
    console.log("invalid");
}



/*


let codes = 200;

if (codes >= 200 && codes <= 299) {
    console.log("Success");
}


else if (codes >= 300 && codes <= 399) {
    console.log("redirection");
}
else if (codes >= 400 && codes <= 499) {
    console.log("client error");
}
else if (codes >= 500 && codes <= 599) {
    console.log("server error");
}
else {
    console.log("invalid");
}

*/