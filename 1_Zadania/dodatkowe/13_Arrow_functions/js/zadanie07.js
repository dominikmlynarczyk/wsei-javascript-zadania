const App = function() {
	this.websites = [ 'onet', 'wp', 'facebook' ];
	this.links = [];
};

App.prototype.generateLinks = function() {
	this.links.push('https://onet.com');
	this.links.push('https://wp.com');
	this.links.push('https://facebook.com');
};

let app = new App();
app.generateLinks();
console.log(app.links);

// jQuery - ojczyzno moja. Ty jesteś jak zdrowie...
$('.menu a').each(function(index) {
	$(this).attr('href', app.links[index]);
});
