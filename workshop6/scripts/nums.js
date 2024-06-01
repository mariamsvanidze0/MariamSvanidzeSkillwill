document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculateBtn').onclick = function() {
        const input = document.getElementById('numberInput').value;
        const numbers = input.split(':');
        
        let sum = 0;
        for (let num of numbers) {
            let parsedNum = parseFloat(num);
            if (isNaN(parsedNum)) {
                document.getElementById('result').textContent = 'Please enter valid numbers separated by colons.';
                document.getElementById('result').style.color = 'red';
                return;
            }
            sum += parsedNum;
        }
        
        const average = sum / numbers.length;
        document.getElementById('result').textContent = 'Average: ' + average;
        document.getElementById('result').style.color = '#333';
    }
});
