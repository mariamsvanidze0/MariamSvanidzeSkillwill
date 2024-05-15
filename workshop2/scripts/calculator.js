function calculator(a,operation, b) {
    if (typeof a === "number" && typeof b === "number" && operation === "+") {
        return a + b;
    } else if (typeof a === "number" && typeof b === "number" && operation === "-") {
        return a - b;
    } else if (typeof a === "number" && typeof b === "number" && operation === "*") {
        return a * b;
    } else if (typeof a === "number" && typeof b === "number" && operation === "/") {
        return a / b;
    } else {
        return false;
    }
}
console.log(calculator(5, "+", 5));
console.log(calculator("5", "+", "5"));
console.log(calculator(5, "?", 5));