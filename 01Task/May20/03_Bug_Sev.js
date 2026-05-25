/*
Question 3 — Bug Severity Classifier

Problem: Given a bug's impact score (1–10), classify the severity.

9–10 → Critical (block release)
7–8 → High
4–6 → Medium
1–3 → Low
Anything else → Invalid score

Sample Input/Output:

Input: 9
Output: Severity: Critical — Block release

Input: 5
Output: Severity: Medium
*/


let bugscore = 9;


if (bugscore >= 9 && bugscore <= 10) {
    console.log("Severity: Critical — Block release");
}

else if (bugscore >= 7 && bugscore <= 8) {
    console.log("Severity: High");
}
else if (bugscore >= 4 && bugscore <= 6) {
    console.log("Severity: Medium");
}
else if (bugscore >= 1 && bugscore <= 3) {
    console.log("Severity: Low");
}
else {
    console.log("Invalid score");
}