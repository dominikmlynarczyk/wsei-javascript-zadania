// Tutaj była chyba przypadkoa przeklejka z zadania 8 więc ją usunąłem

// Zadanie 9
const span = document.querySelectorAll('span');
const ul = document.querySelectorAll('ul');

for (let i = 0; i < ul.length; i++) {
	ul[i].style.display = 'none';
}

for (let i = 0; i < span.length; i++) {
	span[i].addEventListener('mouseover', (event) => {
		console.log(event.target);
		event.target.nextElementSibling.style.display = 'block';
	});

	span[i].addEventListener('mouseout', (event) => {
		event.target.nextElementSibling.style.display = 'none';
	});
}
