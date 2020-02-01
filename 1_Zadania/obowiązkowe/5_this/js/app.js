// Zadanie 0
const car = {
	brand: 'Mercedes',
	color: 'Czarny',
	numberOfKilometers: 0,
	printCarInfo: function() {
		return `${this.color} ${this.brand}, ${this.numberOfKilometers}km`;
	},
	drive: function(km) {
		this.numberOfKilometers += km;
	}
};

car.printCarInfo();
car.drive(20);
car.printCarInfo();

// Zadanie 1
car.services = [ '2018', '2019' ];
car.addServices = function(date) {
	this.services.push(date);
};
car.showServices = function() {
	return this.services;
};

car.addServices('2017');
// console.log(car.showServices);
car.showServices();

// Zadanie 3
const stairs = {
	step: 0,
	up: function() {
		this.step++;
	},
	down: function() {
		this.step--;
	},
	printStep: function() {
		console.log(this.step);
	}
};

stairs.up();
stairs.up();
stairs.up();
stairs.down();
stairs.printStep(); // 2
