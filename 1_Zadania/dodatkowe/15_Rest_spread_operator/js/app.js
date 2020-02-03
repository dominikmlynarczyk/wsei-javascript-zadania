// Zadanie 0
const namesA = [ 'Zosia', 'Marcin', 'Kamil' ];
const namesB = [ 'Ala', 'Puszek', ...namesA, 'Jan', 'Karol' ];

function getAverage(...args) {
	return args.reduce((sum, num) => sum + num) / args.length;
}

console.log(getAverage(2, 4, 5, 6, 7, 79));

// Zadanie 1
const name = 'Dominik';
const letters = [];

letters.push(...name);
console.table(letters);

// Zadanie 2
const fruits = [ 'Banana', 'Kiwi', 'Strawberry' ];
const vegetables = [ 'Potato', 'Tomato', 'Carrot' ];
const mix = [];

mix.push(...fruits);
mix.push(...vegetables);

console.log(mix);
