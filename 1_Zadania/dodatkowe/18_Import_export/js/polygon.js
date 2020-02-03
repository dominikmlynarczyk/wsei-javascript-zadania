export class Polygon {
	constructor(height, width) {
		this.name = 'Polygon';
		this.height = height;
		this.width = width;
	}

	area() {
		return this.height * this.width;
	}

	sayName() {
		console.log('Cześć jestem', this.name + '.');
	}
}
