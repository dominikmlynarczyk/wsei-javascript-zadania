// Były tu jakieś pozostałości po "czymś" chyba przez pomyłkę, więc je usunąłem

// Zadanie 0
var cities = [ 'Kraków', 'Olsztyn', 'Szczecin', 'Ostrów Wielkopolski' ];

const countLetters = cities.map((el) => {
	return el.length;
});

console.log(countLetters);

// Zadanie 1
const randomize = (param1, param2, callback) => {
	if (typeof callback != 'function') return;
	callback(param1, param2);
};

randomize(500, 550, (a, b) => {
	console.log(Math.floor(Math.random() * (b - a) + a));
});

// Zadanie 2
var animals = [ 'cat', 'shrimp', 'giraffe' ];

animals.forEach((el) => {
	console.log(el);
});

// Zadanie 3
var years = [ 1995, 1856, 2014, 1987 ];
const ages = years.map((element) => {
	return new Date().getFullYear() - element;
});

console.log(ages);

// Zadanie 4
// Brak tablicy w zadaniu, więc przyjmuję własną
const numbers = [ 3, 9, 81, 6, 18, 162 ];
var result = numbers.reduce(function(currentNumber, nextNumber) {
	return currentNumber * nextNumber;
});
console.log(result);
