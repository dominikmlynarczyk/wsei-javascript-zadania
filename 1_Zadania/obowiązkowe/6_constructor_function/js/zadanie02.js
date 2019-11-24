const calc = function Calculator () {
    this.history = [];
}

Calculator.prototype.add = function (num1, num2) {
    const sum = num1 + num2;
    this.history.push(`added ${num1} to ${num2} got ${sum}`)
    return sum;
}
Calculator.prototype.multiply = function (num1, num2) {
    const mul = num1 * num2;
    this.history.push(`added ${num1} to ${num2} got ${mul}`)
    return mul;
}
Calculator.prototype.substract = function (num1, num2) {
    const sub = num1 - num2;
    this.history.push(`added ${num1} to ${num2} got ${sub}`)
    return sub;
}
Calculator.prototype.muliply = function (num1, num2) {
    const divide = num1 / num2; 
    this.history.push(`added ${num1} to ${num2} got ${divide}`)
    return divide;
}
Calculator.prototype.printOperations = function () {
    console.table(this.history);
}
Calculator.prototype.clearOperations = function () {
    this.history = [];
}

const calculator = new calc();

calculator.add(2, 2);
calculator.multiply(5, 3);
calculator.substract(10, 2);
calcalator.divide(15, 3);
calculator.printOperations();
calculator.clearOperations();
calculator.printOperations();