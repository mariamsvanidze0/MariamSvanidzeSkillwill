function rollTheDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function triesAndRoll() {
    let tries = 0;
    let roll = 0;
    while (roll !== 3) {
        roll = rollTheDice();
        tries++;
    }
    return tries;
}
function Game() {
    const playerA = triesAndRoll();
    const playerB = triesAndRoll();
   

    if (playerA < playerB) {

        return `Player A rolled 3 in ${playerA}, Player B rolled 3 in ${playerB} tries, Winner is Player A`;
    } else if (playerB < playerA) {
        return `Player A rolled 3 in ${playerA}, Player B rolled 3 in ${playerB} tries, Winner is Player B`;
    } else {
        return `Player A rolled 3 in ${playerA}, Player B rolled 3 in ${playerB} tries, So it's a tie;`
    }
}

console.log(Game());