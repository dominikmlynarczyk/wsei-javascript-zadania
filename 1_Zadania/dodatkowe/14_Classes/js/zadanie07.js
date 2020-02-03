class MenuGenerator {
	constructor(type, elementsArray) {
		this.type = type;
		this.elements = elementsArray;
	}
	getType() {
		console.log(this.type);
	}
	showItems() {
		console.log(this.elements);
	}
}

class HorizontalMenuGenerator extends MenuGenerator {}

class VerticalMenuGenerator extends MenuGenerator {
	animate() {
		console.log('Animacja typu: ' + this.type);
	}
}

let hMenuGenetator = new HorizontalMenuGenerator('horizontal', [ 'start', 'about' ]);
let vMenuGenetator = new VerticalMenuGenerator('vertical', [ 'home', 'contact' ]);

// Ten obiekt nie posiada metody animate()
// hMenuGenetator.animate();

vMenuGenetator.animate();
