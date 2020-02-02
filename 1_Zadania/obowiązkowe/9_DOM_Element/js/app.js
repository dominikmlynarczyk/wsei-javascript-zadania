document.addEventListener('DOMContentLoaded', function() {
	var homeElement = document.getElementById('home');
	var childElements = document.querySelector('.oferts').children;
	var banner = document.querySelector('.ban');
	var blocks = document.querySelectorAll('.block');
	var links = document.querySelector('.links').children;

	// Zadanie 0
	function getDatasInfo(elements) {
		var newArray = [];
		Array.from(elements).forEach((el) => {
			newArray.push(el.getAttribute('data-color'));
		});
		return newArray;
	}

	console.log(getDatasInfo(links));

	// Zadanie 1
	function showElement(element) {
		if (NodeList.prototype.isPrototypeOf(element) || HTMLCollection.prototype.isPrototypeOf(element)) {
			for (let i = 0; i < element.length; i++) {
				console.log(`Nazwa tagu: ${element[i].tagName}`);
				console.log(`Klasy tagu: ${element[i].className}`);
			}
		} else {
			console.log(`Nazwa tagu: ${element.tagName}`);
			console.log(`Klasy tagu: ${element.className}`);
		}
	}

	showElement(homeElement);
	showElement(childElements);
	showElement(banner);
	showElement(blocks);
	showElement(links);

	// Zadanie 2
	for (el of blocks) {
		// innerHTML tylko zawartość wewnątrz tagu (tekst + elementy), outerHTML zwraca zawartość wewnąrz tagu i dodatkowo sam tag
		console.log(el.innerHTML);
		console.log(el.outerHTML);

		// Modyfikujemy zawartość wewnątrz elementów o klasie .block przez co cała zawartość (elementy <a>) zostają usunięte i w ich miejsce pojawia się powyższy tekst
		el.innerHTML = 'Nowa wartość diva o klasie blocks';

		console.log(el.innerHTML);
		console.log(el.outerHTML);
	}

	// Zadanie 3
	var mainFooter = document.querySelector('#mainFooter');

	function getID(element) {
		return element.id;
	}

	console.log(getID(mainFooter));

	// Zadanie 4
	function getTags(elements) {
		const array = [];

		Array.from(elements).forEach((el) => {
			array.push(el.tagName);
		});

		return array;
	}

	console.log(getTags(childElements));

	// Zadanie 5
	function getClassInfo(elements) {
		const array = [];
		for (let i = 0; i < elements.classList.length; i++) {
			array.push(elements.classList[i]);
		}

		return array;
	}

	console.log(getClassInfo(banner));

	// Zadanie 6
	const liElements = document.querySelectorAll('nav li');

	function setDataDirection(elements) {
		for (item of elements) {
			if (!item.getAttribute('data-direction')) {
				item.setAttribute('data-direction', 'top');
			}
		}
	}

	setDataDirection(liElements);
});
