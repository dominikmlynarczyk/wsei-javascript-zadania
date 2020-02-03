document.addEventListener('DOMContentLoaded', () => {
	console.log('Działa');

	const images = document.querySelectorAll('img');
	const showButton = document.querySelector('#showButton');
	const hideButton = document.querySelector('#hideButton');
	const tagInput = document.querySelector('#tagInput');

	console.log(images);
	console.log(showButton);
	console.log(hideButton);
	console.log(tagInput);

	showButton.addEventListener('click', () => {
		console.log('Klik na showButton');

		const enteredTagValue = tagInput.value;

		if (enteredTagValue == '') return;

		for (let image of images) {
			// indexOf prowoduje problemy, bo jezeli pokryje sie tylko jedna litera z wybranym tagiem to ten tag zostanie wzięty pod uwagę...
			if (image.dataset.tag.indexOf(enteredTagValue) >= 0) {
				if (image.classList.contains('invisible')) {
					image.classList.remove('invisible');
				}
			}
		}

		tagInput.value = '';
	});

	hideButton.addEventListener('click', () => {
		console.log('Klik na hideButton');

		const enteredTagValue = tagInput.value;

		if (enteredTagValue == '') return;

		for (let image of images) {
			// indexOf prowoduje problemy, bo jezeli pokryje sie tylko jedna litera z wybranym tagiem to ten tag zostanie wzięty pod uwagę...
			// Dla litery e wszystko zostanie ukryte...
			if (image.dataset.tag.indexOf(enteredTagValue) >= 0) {
				if (!image.classList.contains('invisible')) {
					image.classList.add('invisible');
				}
			}
		}

		tagInput.value = '';
	});
});
