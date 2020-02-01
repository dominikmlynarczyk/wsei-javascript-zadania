var task1Array = [ [ 2, 3 ], [ 'Ala', 'Ola' ], [ true, false ], [ 5, 6, 7, 8 ], [ 12, 15, 67 ] ];

var task2Array = [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ], [ 9, 10, 11, 12 ] ];

// Zadanie 0
function checkArray(array) {
	const result = [];
	for (let i = 0; i < array.length; i++) {
		const isNotOdd = array[i].filter((number) => number % 2 != 0).length > 0;
		result.push(!isNotOdd);
	}
	return result;
}

checkArray([ [ 11, 12 ], [ 42, 2 ], [ -4, -120 ], [ 0, 0 ], [ 1, 34 ] ]);

// Zadanie 1
console.log(task1Array[3][2]);
console.log(task1Array[1].length);
console.log(task1Array[4][2]);

// Zadanie 2
task2Array.forEach((el) => console.log(el));

task2Array.forEach((el, index) => console.log(task2Array[index].length));

for (let i = 0; i < task2Array.length; i++) {
	for (let j = 0; j < task2Array[i].length; j++) {
		console.log(task2Array[i][j]);
	}
}

// Zadanie 3
function print2DArray(array) {
	array.forEach((el) => el.forEach((el2) => console.log(el2)));
}

print2DArray([ [ 1, 2 ], [ 3, 4 ] ]);

// Zadanie 4
const task3Array = [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ], [ 9, 10, 11, 12 ] ];

print2DArray(task3Array);
// lub wypisanie całej tablicy:
console.log(task3Array);

// Zadanie 5
function create2DArray(rows, columns) {
	let counter = 1;
	const array = [];
	for (let i = 0; i < rows; i++) {
		array[i] = [];
		for (let j = 0; j < columns; j++) {
			array[i][j] = counter;
			counter++;
		}
	}
	return array;
}

const newArray = create2DArray(4, 4);
// Dodatkowe wypisanie w konsoli elementów tablicy
newArray.forEach((el) => console.log(el));
