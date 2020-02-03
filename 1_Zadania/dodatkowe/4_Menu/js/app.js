// Poprawiłem zadanie, bo elementy nie były ukryte. Błąd był w HTML (lub w CSS zależy jak patrzeć :) ) i dodałem do div klase .nav

document.addEventListener('DOMContentLoaded', () => {
	console.log('Działa!');

	const liElements = document.querySelectorAll('.nav > ul > li');
	liElements.forEach((li) => {
		console.log(li);

		li.addEventListener('mouseover', () => {
			if (li.contains(li.querySelector('ul'))) {
				// console.log('Event mouseover podpięty!');
				li.querySelector('ul').style.display = 'block';
			}
		});

		li.addEventListener('mouseout', () => {
			if (li.contains(li.querySelector('ul'))) {
				// console.log('Event mouseout podpięty!');
				li.querySelector('ul').style.display = 'none';
			}
		});
	});
});

// Wszystko działa i nie widzę problemów :)
