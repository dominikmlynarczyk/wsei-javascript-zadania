import Polygon from './polygon';

export class Square extends Polygon {
	constructor(dim = 5) {
		super(dim, dim);
		this.name = 'Square';
	}
}
