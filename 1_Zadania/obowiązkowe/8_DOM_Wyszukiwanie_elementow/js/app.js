document.addEventListener('DOMContentLoaded', function() {
	// Zadanie 0
	function getDataAnimation(element) {
		const dataValue = element.getAttribute('data-animation');
		return dataValue;
	}

	const element = document.querySelector('.title');

	getDataAnimation(element);

	// Zadanie 1
	const home = document.getElementById('home');
	console.log(home);
	const homeElement = document.querySelector('#home');
	console.log(homeElement);

	// querySelector wybiera pierwsze wystąpienie elementu spełniającego formułę przekazaną w parametrze
	const li = document.querySelector('li[data-direction]');
	console.log(li);

	const block = document.querySelector('.block');
	console.log(block);

	// Zadanie 2
	const allLiElements = document.querySelectorAll('nav li');
	console.log(`Liczba znalezionych elementów ${allLiElements.length}. Elementy znalezione:`);
	console.log(Array.from(allLiElements));

	const allPElements = document.querySelectorAll('div p');
	console.log(`Liczba znalezionych elementów ${allPElements.length}. Elementy znalezione:`);
	console.log(Array.from(allPElements));

	const allDivElements = document.querySelectorAll('article div');
	console.log(`Liczba znalezionych elementów ${allDivElements.length}. Elementy znalezione:`);
	console.log(Array.from(allDivElements));

	// Zadanie 3
	const article = document.querySelector('article.first');
	console.log(article);

	const descendantsH1 = article.querySelectorAll('h1');
	console.log(Array.from(descendantsH1));

	// Podejrzewam błąd w zadaniu i mogło chodzić o elementy h2, poniżej rozwiązanie dla elementów h2

	const descendantsH2 = article.querySelectorAll('h2');
	console.log(Array.from(descendantsH2));
});
