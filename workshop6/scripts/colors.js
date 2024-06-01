document.addEventListener('DOMContentLoaded', function() {
    let changeColorBtn = document.getElementById('changeColorBtn');
    let colorInput = document.getElementById('colorInput');
    let validColors = ['red', 'blue', 'green', 'black', 'white'];

    changeColorBtn.onclick = function() {
        let color = colorInput.value.toLowerCase();
        if (validColors.includes(color)) {
            document.body.style.backgroundColor = color;
        } else {
            alert('Invalid color. Please enter one of the following colors: red, blue, green, black, white.');
        }
    }
});
