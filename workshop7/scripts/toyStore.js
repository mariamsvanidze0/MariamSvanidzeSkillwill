function mySetTimeout(delay) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}

async function makeToys(delay) {
    await mySetTimeout(delay);
    if (Math.random() > 0.1) {
        return 'Undefected';
    } else {
        return 'Defected';
    }
}

async function deliverToys(delay) {
    await mySetTimeout(delay);
    return 'Delivered';
}

async function sellToys(status, delay) {
    if (status === 'Undefected') {
        await mySetTimeout(delay);
        if (Math.random() > 0.7) {
            return 'Toy has been sold';
        } else {
            return 'Toy was unsuccessful';
        }
    }
}

async function promisifyAsync(makeDelay, deliverDelay, sellDelay) {
    try {
        const status = await makeToys(makeDelay);
        const deliveryStatus = await deliverToys(deliverDelay);
        if (deliveryStatus === 'Delivered') {
            const result = await sellToys(status, sellDelay);
            return result;
        }
    } catch (error) {
        return error;
    }
}

function promisifyThen(makeDelay, deliverDelay, sellDelay) {
    makeToys(makeDelay)
        .then((status) => {
            return deliverToys(deliverDelay).then(() => status);
        })
        .then((status) => {
            return sellToys(status, sellDelay);
        })
        .then((result) => {
            displayMessage(result);
        })
        .catch((error) => {
            displayMessage(error);
        });
}

function displayMessage(message) {
    const asyncContent = document.getElementById('asyncContent');
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    messageElement.className = 'message';
    asyncContent.appendChild(messageElement);
}

document.getElementById('startAsyncButton').addEventListener('click', async () => {
    const makeDelay = parseInt(document.getElementById('makeDelay').value, 10);
    const deliverDelay = parseInt(document.getElementById('deliverDelay').value, 10);
    const sellDelay = parseInt(document.getElementById('sellDelay').value, 10);

    document.getElementById('asyncContent').innerHTML = '';

    const result = await promisifyAsync(makeDelay, deliverDelay, sellDelay);
    displayMessage(result);

    promisifyThen(makeDelay, deliverDelay, sellDelay);
});
