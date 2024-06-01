let button = document.getElementById("newBttn");
let mainText = document.getElementById("newDv");

function showText() {
    if (mainText.style.display === "none" || mainText.style.display === "") {
        mainText.style.display = "block";
    } else {
        mainText.style.display = "none";
    }
}
