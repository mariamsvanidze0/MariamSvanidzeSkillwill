function mySetTimeout(delay) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}

async function handleButtonClick() {
    const asyncContent = document.getElementById('asyncContent');

    const viewerText = document.createElement('h2');
    viewerText.textContent = "Hello Dear Viewer";
    viewerText.className = 'cute-text';
    asyncContent.appendChild(viewerText);

    const changeColorButton = document.createElement('button');
    changeColorButton.textContent = "Change Color";
    asyncContent.appendChild(changeColorButton);

    changeColorButton.addEventListener('click', async () => {
        await mySetTimeout(1000);
        changeColor(viewerText);
    });
}

function changeColor(element) {
    const colors = ['#ff69b4', '#ffb6c1', '#db7093', '#ff1493', '#c71585'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    element.style.color = randomColor;
}

document.getElementById('startAsyncButton').addEventListener('click', async () => {
    await mySetTimeout(500);
    handleButtonClick();
});
