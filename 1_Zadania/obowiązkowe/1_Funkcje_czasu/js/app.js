// Zadanie 1
function countHello(number) {
	var counter = 0;
	const interval = setInterval(function() {
		console.log('Hello ', ++counter);
		if (counter === number) clearInterval(interval);
	}, 1000);
}

countHello(10);
