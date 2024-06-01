function calculateSum(...numbers) {
    if (numbers.length <= 2 ) {
        return "Wrong number, Please provide more than 2 numbers";
    }
    
    let sum = numbers[0] + numbers[1];
    let multiply = 1;
    
    for (let i = 2; i < numbers.length; i++) {
        multiply *= numbers[i];
    }
    
    return [sum, multiply];
}

console.log(calculateSum(2,2,3,3));

