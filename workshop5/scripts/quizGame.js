document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".answer");
    let score = 0;
    const scoreDisplay = document.getElementById("score");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            if (this.dataset.correct) {
                this.classList.add("correct");
                this.classList.remove("incorrect");
                score++;
                scoreDisplay.textContent = score;
            } else {
                this.classList.add("incorrect");
                this.classList.remove("correct");
            }
        });
    });
});
