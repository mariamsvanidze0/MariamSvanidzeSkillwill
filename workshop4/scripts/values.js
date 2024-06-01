function replaceFunc(someData, valueToReplace, valueToReplaceWith) {
    let result = someData.split(valueToReplace).join(valueToReplaceWith);
    return result;
}

let someData = 'Hello, This is my first Homework';
let valueToReplace = 'first';
let valueToReplaceWith = 'fourth';

console.log(replaceFunc(someData, valueToReplace, valueToReplaceWith));
