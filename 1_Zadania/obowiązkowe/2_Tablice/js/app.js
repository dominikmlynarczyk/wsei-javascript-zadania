// Zadanie 0
function distFromAverage(array) {
	// Obliczanie średniej
	let sum = 0,
		average;
	for (i = 0; i < array.length; i++) {
		sum += array[i];
	}
	average = sum / array.length;

	// Obliczanie różnicy
	let newArray = [];
	array.forEach((el) => {
		newArray.push(el - average);
	});

	return newArray;
}

distFromAverage([ 1, 2, 3, 4, 5, 6, 7 ]);
distFromAverage([ 1, 1, 1, 1 ]);
distFromAverage([ 2, 8, 3, 7 ]);

//Zadanie 1
const favouriteFruits = [ 'apple', 'orange', 'banana' ];

console.log(favouriteFruits[0]);
console.log(favouriteFruits[favouriteFruits.length - 1]);
favouriteFruits.forEach((el) => console.log(el));

// Zadanie 2 - oddzielny plik

// Zadanie 3
function printTable(array) {
	for (let i = 0; i < array.length; i++) {
		console.log(array[i]);
	}
}

printTable([ 1, 2, 3, 4 ]);

// Zadanie 4
function multiply(array) {
	let result = array[0];
	for (let i = 1; i < array.length; i++) {
		result *= array[i];
	}
	return result;
}

multiply([ 1, 2, 3, 4, 5, 6, 7 ]);
multiply([ 1, 1, 1, 1 ]);
multiply([ 2, 8, 3, 7 ]);

// Zadanie 5
function getEvenAverage(array) {
	let sum = 0,
		count = 0;
	array.forEach((element) => {
		if (element % 2 == 0) {
			sum += element;
			count++;
		}
	});
	if (count == 0) return null;
	return sum / count;
}

getEvenAverage([ 1, 2, 3, 4, 5, 6, 7 ]);
getEvenAverage([ 1, 1, 1, 1 ]);
getEvenAverage([ 2, 8, 3, 7, 4 ]);

// Zadanie 6
function sortArray(array) {
	return array.sort((a, b) => {
		return a - b;
	});
}

sortArray([ 145, 11, 3, 64, 4, 6, 10 ]);

// Zadanie 7
function addArrays(array1, array2) {
	let biggerArray, smallerArray;

	if (array1.length > array2.length) {
		biggerArray = array1;
		smallerArray = array2;
	} else {
		biggerArray = array2;
		smallerArray = array1;
	}

	const newArray = [];
	for (let i = 0; i < biggerArray.length; i++) {
		if (i >= smallerArray.length) {
			newArray.push(biggerArray[i]);
			continue;
		}
		newArray.push(biggerArray[i] + smallerArray[i]);
	}

	return newArray;
}

addArrays([ 4, 0, 1, 3, 4 ], [ 1, 9, 6, 7, 8, 17 ]);
addArrays([ 8, 3, 22 ], [ 1, 3, 2 ]);
addArrays([ 2, 3, 1, 5, 3, 5 ], [ 3, 1, 76, 1 ]);
