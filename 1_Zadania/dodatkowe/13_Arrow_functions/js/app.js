// Zadanie 1
(() => {
	console.log('Hello World');
})();

// Zadanie 2
const addTwoNumbers = (number = 5) => number * 2;

console.log(addTwoNumbers(2));
console.log(addTwoNumbers());

// Zadanie 3
const chooseBigger = (a, b) => {
	if (a > b) return a;
	return b;
};

console.log(chooseBigger(2, 999));
console.log(chooseBigger(2, 1));

// Zadanie 4
const getSecondMaxNumber = (array) => {
	let max = array[0];
	let index;
	for (let i = 0; i < 2; i++) {
		for (let j = 1; j < array.length; j++) {
			if (array[j] > max) {
				index = j;
				max = array[j];
			}
		}
		if (i === 0) {
			array.splice(index, 1);
			max = 0;
		}
	}
	return max;
};

console.log(getSecondMaxNumber([ 2, 3, 1, 6, 100, 49, 5, 7, 8, 9 ]));

// Zadanie 5
((parameter) => {
	return parameter;
})('parameter');

// Zadanie 6
countHello = (number = 10) => {
	var counter = 0;
	const interval = setInterval(() => {
		console.log('Hello ', ++counter);
		if (counter === number) clearInterval(interval);
	}, 1000);
};

countHello(7);
