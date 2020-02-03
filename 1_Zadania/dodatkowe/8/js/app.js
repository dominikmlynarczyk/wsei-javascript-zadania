function Tree(type) {
	this.type = type;
}

Tree.prototype.bloom = function() {
	return 'I am blooming';
};

const tree1 = new Tree('brzoza');
console.log(tree1.type);
console.log(tree1.bloom());

const tree2 = new Tree('olcha');
console.log(tree2.type);
console.log(tree2.bloom());

const tree3 = new Tree('dab');
console.log(tree3.type);
console.log(tree3.bloom());
