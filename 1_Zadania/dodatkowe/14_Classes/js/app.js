// Zadanie 0
class Vehicle {
	constructor(name) {
		this.name = name;
	}
	getName() {
		return this.name;
	}
}

class Boat extends Vehicle {
	sail() {
		console.log('Sail away with me honey!');
	}
}

class Car extends Vehicle {
	drive() {
		console.log('Brum!');
	}
}

class Plane extends Vehicle {
	fly() {
		console.log('I believe I can fly!');
	}
}

const boat = new Boat('Bertram 35');
const car = new Car('Porsche');
const plane = new Plane('Boeing');

boat.sail();
// obiekt boat nie ma dostępu do metod drive() i fly()
// boat.drive();
// boat.fly();
car.drive();
plane.fly();

// Zadanie 1
class Kaczka {
	constructor() {
		this.type = 'zwykła';
	}

	kwacz() {
		console.log('kwa kwa');
	}

	plywaj() {
		console.log('płynę...');
	}

	wyswietl() {
		console.log(`Wygląda jak ${this.type} kaczka.`);
	}

	// Zadanie 4
	lec() {
		console.log(`Lecę`);
	}
}

const kaczucha = new Kaczka();
kaczucha.kwacz();
kaczucha.plywaj();
kaczucha.wyswietl();

// Zadanie 2.
class DzikaKaczka extends Kaczka {
	constructor() {
		super();
		this.type = 'dzika';
	}
}

const dzikaKaczucha = new DzikaKaczka();
dzikaKaczucha.kwacz();
dzikaKaczucha.plywaj();
dzikaKaczucha.wyswietl();

// Zadanie 3.
class KrzyzowkaKaczka extends Kaczka {
	constructor() {
		super();
		this.type = 'krzyżówka';
	}
}

const krzyzoKaczucha = new KrzyzowkaKaczka();
krzyzoKaczucha.kwacz();
krzyzoKaczucha.plywaj();
krzyzoKaczucha.wyswietl();

// Zadanie 5.
class GumowaKaczka extends Kaczka {
	constructor() {
		super();
		this.type = 'gumowa';
	}
	lec() {
		console.log('gumowe kaczki nie potrafią latać :(');
	}
}

const gumowaKaczucha = new GumowaKaczka();
gumowaKaczucha.kwacz();
gumowaKaczucha.plywaj();
gumowaKaczucha.wyswietl();
gumowaKaczucha.lec();
