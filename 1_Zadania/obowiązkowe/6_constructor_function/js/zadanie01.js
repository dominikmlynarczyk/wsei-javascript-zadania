// Zadanie 1
var Robot = function(name) {
	this.name = name;
	this.isFunctional = true;
};

Robot.prototype.sayHi = function(toWho) {
	if (this.isFunctional === true) {
		console.log('Robot ' + this.name + ' greets ' + toWho);
	} else {
		console.log('Robot ' + this.name + ' is broken');
	}
};

Robot.prototype.changeName = function(newname) {
	console.log('Robot ' + this.name + ' changes name to ' + newname);
	this.name = newname;
};

Robot.prototype.fixIt = function() {
	this.isFunctional = true;
	console.log('Robot ' + this.name + ' was fixed');
};

var robot = new Robot('Leszek');
robot.sayHi('Andrzej');
robot.changeName('Grzesiek');
robot.fixIt();

var secondRobot = new Robot('Jurek');
secondRobot.isFunctional = false;
secondRobot.sayHi('Andrzej');
secondRobot.fixIt();
secondRobot.sayHi('Andrzej');
secondRobot.changeName('Jerzy');
