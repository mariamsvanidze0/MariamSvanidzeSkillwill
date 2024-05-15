function typeChecker(randomNum) {
    if (typeof randomNum === "number") {
        return true;
    } else {
        return false;
    }

}
console.log(typeChecker(50));
console.log(typeChecker("50"));