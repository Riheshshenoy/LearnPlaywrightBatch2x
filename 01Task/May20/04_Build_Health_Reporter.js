let perCiBuild = 30;

if (perCiBuild == 100) {
    console.log("Green Build");
}

else if (perCiBuild >= 90 && perCiBuild <= 99) {
    console.log("🟡Stable (investigate failures)");
}
else if (perCiBuild >= 70 && perCiBuild <= 89) {
    console.log("Unstable");

}
//else if (perCiBuild <= 70) {
// console.log(" 🔴Broken Build (block deployment)");
//}

else {
    console.log(" 🔴Broken Build (block deployment)");
}