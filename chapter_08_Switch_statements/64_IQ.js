let fruit = "banana";
switch (fruit) {
    case "apple":
        console.log("Apple selected");
    case "banana":
        console.log("Banana selected");
    case "cherry":
        console.log("Cherry selected");
    case "date":
        console.log("Date selected");
    default:
        console.log("Default reached");
}


//  No break statement in case block will cause fall through. It will execute all the cases below the matched case until it finds a break statement or reaches the end of the switch statement.