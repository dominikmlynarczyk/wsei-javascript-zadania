// Zadanie 0a

let weather = [ 'snow', 'rain', 'sun' ];
let [ clouds, , tornado ] = weather;

console.log(`Pierwsza wartość zmieniona: ${clouds}. Ostatnia wartość zmieniona ${tornado}`);

// Zadanie 0b
const slider = {
	type: 'infinite',
	numberOfItems: 10,
	center: true,
	autoStart: true
};

let { type, autoStart } = slider;

console.log(`${type} oraz ${autoStart}`);

// Zadanie 1
let names = [ 'Brunhilda', 'Marcelina', 'Mirek' ];
let [ name1, name2, name3 ] = names;

console.log(`Imie 1:${name1}, Imie 2:${name2}, Imie 3:${name3}`);

// Zadanie 2
function generateRandomNumbers() {
	let numbers = [];

	for (let i = 0; i < 6; i++) {
		numbers.push(Math.floor(Math.random() * 6));
	}

	return numbers;
}

let [ a, , b ] = generateRandomNumbers();

console.log(`Pierwszy element tablcy: ${a}, trzeci element tablicy: ${b}`);

// Zadanie 4
function getAnimal() {
	return {
		name: 'Mruczek',
		age: 10,
		getVoice: () => 'miau miau'
	};
}

let animal = getAnimal();
let { name: catName, getVoice: catVoice } = animal;

console.log(`Mam na imię ${catName} i mówię ${catVoice()}`);
