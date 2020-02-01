function Calculator() {
	this.history = [];
}

Calculator.prototype.add = function(num1, num2) {
	this.history.push(`added ${num1} to ${num2} got ${num1 + num2}`);
	return num1 + num2;
};
Calculator.prototype.multiply = function(num1, num2) {
	this.history.push(`multiplied ${num1} with ${num2} got ${num1 * num2}`);
	return num1 * num2;
};
Calculator.prototype.substract = function(num1, num2) {
	this.history.push(`subtracted ${num1} from ${num2} got ${num1 - num2}`);
	return num1 - num2;
};
Calculator.prototype.divide = function(num1, num2) {
	this.history.push(`divided ${num1} to ${num2} got ${num1 / num2}`);
	return num1 / num2;
};
Calculator.prototype.printOperations = function() {
	console.table(this.history);
};
Calculator.prototype.clearOperations = function() {
	this.history = [];
};

const calculator = new Calculator();

calculator.add(2, 2);
calculator.multiply(5, 3);
calculator.substract(10, 2);
calculator.divide(15, 3);
calculator.printOperations();
calculator.clearOperations();
calculator.printOperations();
