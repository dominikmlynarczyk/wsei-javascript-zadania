let foods = [];

class Food {
	constructor(name, protein, carbs, fat) {
		this.name = name;
		this.protein = protein;
		this.carbs = carbs;
		this.fat = fat;
	}

	print() {
		console.log(this.name + ': ' + this.protein + 'g protein, ' + this.carbs + 'g carbs ' + this.fat + 'g fat.');
	}
}

class FatFreeFood extends Food {
	constructor(name, protein, carbs, fat) {
		super(name, protein, carbs, fat);
	}
}

class FastFood extends Food {
	constructor(name, protein, carbs, fat) {
		super(name, protein, carbs, fat);
	}
}

const list = document.querySelector('#products');
const form = document.querySelector('form');

const nameInput = document.querySelector('#name');

nameInput.value = '';
nameInput.setAttribute('placeholder', 'Podaj nazwę produktu...');
nameInput.setAttribute('required', 'required');

const proteinsInput = document.getElementById('proteins');
proteinsInput.setAttribute('type', 'number');
proteinsInput.setAttribute('placeholder', 'Protein...');
proteinsInput.setAttribute('required', 'required');

const carbsInput = document.getElementById('carbs');
carbsInput.setAttribute('type', 'number');
carbsInput.setAttribute('placeholder', 'Carbs...');
carbsInput.setAttribute('required', 'required');

const fatInput = document.getElementById('fat');
fatInput.setAttribute('type', 'number');
fatInput.setAttribute('placeholder', 'Fat...');
fatInput.setAttribute('required', 'required');

form.addEventListener('submit', function(event) {
	const name = nameInput.value;
	const proteins = proteinsInput.value;
	const carbs = carbsInput.value;
	const fat = fatInput.value;
	const kcal = parseInt(proteins * 4 + carbs * 4 + fat * 9);
	console.log(kcal);
	console.log(kcal > 250);
	if (kcal > 250) {
		const newProduct = new FastFood(name, proteins, carbs, fat);
		foods.push(newProduct);
	} else if (kcal <= 250) {
		const newProduct = new FatFreeFood(name, proteins, carbs, fat);
		foods.push(newProduct);
	}

	console.log(foods);

	foods.forEach((el) => el.print());

	var listItem = document.createElement('li');
	listItem.innerHTML = `Nazwa produktu: ${name}; Białko: ${proteins}g; Węglowodany: ${carbs}g; Tłuszcze: ${fat}g; Kalorie: ${kcal}kcal.`;
	list.appendChild(listItem);

	event.preventDefault();
});

new FastFood('Fries', 3.4, 41, 15);
new FastFood('Donut', 4.9, 51, 25);
new FatFreeFood('Greek Yogurt', 10, 3.6, 0.4);
