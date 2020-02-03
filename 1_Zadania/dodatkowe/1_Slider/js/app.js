document.addEventListener('DOMContentLoaded', () => {
	console.log('Działa');

	const btnNextPicture = document.querySelector('#nextPicture');
	const btnPreviousPicture = document.querySelector('#prevPicture');
	const liElements = document.querySelectorAll('li');

	let index = 0;
	liElements[index].classList.add('visible');

	btnNextPicture.addEventListener('click', () => {
		console.log('KLIK - przycisk naprzód');
		liElements[index].classList.remove('visible');
		index++;
		if (index === liElements.length) index = 0;
		liElements[index].classList.add('visible');
	});

	btnPreviousPicture.addEventListener('click', () => {
		console.log('KLIK - Przycisk wstecz');
		liElements[index].classList.remove('visible');
		index--;
		if (index === -1) index = liElements.length - 1;
		liElements[index].classList.add('visible');
	});
});

// Punkt 7: Nie widziałem problemów, bo od razu zobaczyłem przekroczenie zakresu
