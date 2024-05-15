function toFahrenheit(celsius) {

    if (typeof celsius === "number") {
        return (9/5 * celsius) + 32;
    } else {
        return "Please provide correct number";
    }
}
console.log(toFahrenheit(5));
console.log(toFahrenheit("20"));

