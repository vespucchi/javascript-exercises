const sumAll = function(firstNumber, secondNumber) {
    if(!Number.isInteger(firstNumber) || !Number.isInteger(secondNumber)) {
        return "ERROR";
    } else if(firstNumber < 0 || secondNumber < 0) {
        return "ERROR";
    }

    let num1 = Math.min(firstNumber, secondNumber);
    let num2 = Math.max(firstNumber, secondNumber);
    let sum = 0;

    for(let i = num1; i <= num2; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
