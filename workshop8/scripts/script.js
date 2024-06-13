function deepCopy(obj) {
    return new Promise((resolve, reject) => {
        if (typeof obj !== 'object' || obj === null) {
            reject(new Error('Argument is not an object'));
        } else {
            resolve(JSON.parse(JSON.stringify(obj)));
        }
    });
}

//object
deepCopy({a: 1, b: {c: 2}})
    .then(copy => console.log('Copied object:', copy))
    .catch(error => console.error('Error:', error.message));

//not object
deepCopy('something')
    .catch(error => console.error('Error:', error.message));
