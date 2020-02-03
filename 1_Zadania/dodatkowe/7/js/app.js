// Zadanie 1
function getNumber(number, array) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] === number) return true;
	}
	return false;
}

console.log(getNumber(2, [ 33, 54, 2, 1, 4, 100 ]));
console.log(getNumber(5, [ 33, 54, 2, 1, 4, 100 ]));

// Zadanie 2
function createIdentityMatrix(rows, columns) {
	const array = [];

	for (let i = 0; i < rows; i++) {
		array[i] = [];
		for (let j = 0; j < columns; j++) {
			if (i === j) {
				array[i][j] = 1;
			} else {
				array[i][j] = 0;
			}
		}
	}

	return array;
}

console.log(createIdentityMatrix(4, 4));

// Zadanie 1 - dodatkowe

function addTheSameNumbers(number, array) {
	if (!array.includes(number)) return null;
	let count = 0;
	array.forEach((element) => {
		if (element === number) count += number;
	});
	return count;
}

console.log(addTheSameNumbers(7, [ 4, 7, 24, 7, 0, 10 ]));
console.log(addTheSameNumbers(9, [ 33, 54, 2, 1, 9, 100 ]));
console.log(addTheSameNumbers(0, [ 33, 0, 2, 0, 9, 0 ]));
console.log(addTheSameNumbers(43, [ 6, 0, 2, 2, 3, 46 ]));

// Zadanie 2 - dodatkowe

function factors(number) {
	let array = [];
	if (number <= 0) return array;
	for (let i = number; i > 0; i--) {
		if (number % i === 0) {
			array.push(i);
		}
	}
	return array;
}

console.log(factors(2));
console.log(factors(54));
console.log(factors(-4));

//Zadanie 3 - dodatkowe
function getMissingElement(array) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] + 1 != array[i + 1] && i !== array.length - 1) return array[i] + 1;
	}
	return null;
}

console.log(getMissingElement([ 1, 2, 3, 4, 5, 6, 7 ]));
console.log(getMissingElement([ 6, 7, 8, 10, 11, 12, 13, 14, 15 ]));
console.log(getMissingElement([ -4, -3, -2, 0, 1, 2, 3, 4 ]));

// Zadanie 4 - dodatkowe
function getLastNumbers(number, array) {
	if (isNaN(number)) return [];
	let startIndex = array.length - number;
	return array.slice(startIndex);
}

console.log(getLastNumbers(2, [ 1, 2, 3, 4, 5, 6, 7 ]));
console.log(getLastNumbers(4, [ 6, 7, 8, 10, 11, 12, 13, 14, 15 ]));
console.log(getLastNumbers([ -4, -3, -2, 0, 1, 2, 3, 4 ]));
console.log(getLastNumbers('ala', [ -4, -3, -2, 0, 1, 2, 3, 4 ]));
