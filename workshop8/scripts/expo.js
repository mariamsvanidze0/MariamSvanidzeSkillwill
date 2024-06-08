function expo(number, power, callback) {
    if (power === 0) {
        callback(1);
        return;
    }
    if (power === 1) {
        callback(number);
        return;
    }
    expo(number, power - 1, function(result) {
        callback(number * result);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('expoForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const number = parseInt(document.getElementById('number').value);
        const power = parseInt(document.getElementById('power').value);
        expo(number, power, function(result) {
            document.getElementById('result').textContent = `Result: ${result}`;
        });
    });
});
