// Zadanie 0a
const city = {
	capital: 'Warszawa',
	population: 1777972,
	president: 'Rafał Trzaskowski',
	primeMinisters: [ 'Jarek', 'Antek' ]
};

console.log(
	`Stolica: ${city.capital}; Populacja: ${city.population}; Prezydent: ${city.president}; Prime Ministers: ${city.primeMinisters}`
);

// Zadanie 0b
const timeMachine = {
	shape: 'Portal',
	model: 'XJS',
	run: function(date, place) {
		console.log(`Przeniosłeś się do ${place} i jest obecnie ${date}`);
	}
};
console.log(timeMachine.shape);
console.log(timeMachine.model);
timeMachine.run('20-11-2030', 'Sydney');

// Zadanie 1
const book = {
	title: 'Wiedźmin - Krew Elfów',
	author: 'Andrzej Sapkowski',
	numberOfPages: 340
};

console.log(`Tytuł: ${book.title}; Autor: ${book.author}; Ilość stron: ${book.numberOfPages}`);

// Zadanie 2
const person = {};

person.name = 'Andrzej';
person.age = 12;
person.sayHello = function() {
	console.log('hello');
};

console.log(person.name);
console.log(person.age);
person.sayHello();

// Zadanie 3
const recipe = {
	title: 'Przepis na jajecznicę',
	servings: 0
};

recipe.ingredients = [];
// Dodatkowa metoda dodająca składniki
recipe.addIngredient = function(ingredient) {
	this.ingredient.push(ingredient);
	this.servings++;
};

recipe.addIngredient('Składnik 1');
recipe.addIngredient('Składnik 2');

console.log(recipe.title);
console.log(recipe.servings);
console.log(recipe.ingredients);

// Zadanie 4
var movie = {
	director: 'Peter Jackson',
	writers: [ ' J.R.R. Tolkien ', 'Fran Walsh', 'Philippa Boyens', 'Peter Jackson' ],
	stars: [ 'Elijah Wood', 'Ian McKellen', 'Orlando Bloom' ],
	country: 'New Zealand | USA',
	budget: '$93,000,000',
	imdbPoints: 8.8,
	year: 2001,
	time: '2h 58 min',
	category: ' Adventure, Drama, Fantasy'
};

for (const show in movie) {
	console.log(show + ': ' + movie[show.valueOf()]);
}

// Zadanie 5
var animals = [
	{
		type: 'cat',
		breed: 'persian',
		name: 'Tiberius',
		health: [
			{
				date: '2012-03-03',
				visitType: 'grafting'
			},
			{
				date: '2015-06-23',
				visitType: 'bowel surgery'
			}
		]
	},
	{
		type: 'Guinea pig',
		breed: 'The Rex',
		name: 'Marko',
		health: [
			{
				date: '2015-12-04',
				visitType: 'grafting'
			},
			{
				date: '2016-03-15',
				visitType: 'ear cleaning'
			}
		]
	}
];

for (let i = 0; i < animals.length; i++) {
	for (let property in animals[i]) {
		if (!Array.isArray(animals[i][property.valueOf()])) {
			console.log(`${property}: ${animals[i][property.valueOf()]}`);
		} else {
			for (let health in animals[i][property.valueOf()]) {
				for (let innerProperty in animals[i][property.valueOf()][health]) {
					console.log(
						`${innerProperty.valueOf()}: ${animals[i][property.valueOf()][health][innerProperty.valueOf()]}`
					);
				}
			}
		}
	}
}

// Zadanie 6
var spoon = {
	isExist: true
};

var fork = spoon;
fork.isExist = false;

// False - Łyżka nie istnieje :)
console.log(spoon.isExist);
