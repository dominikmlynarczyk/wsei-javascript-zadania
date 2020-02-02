document.addEventListener('DOMContentLoaded', () => {
	const images = document.querySelectorAll('.page-header > img');
	const form = document.querySelector('form');

	let operatingSystems = {
		Windows: images[2],
		'Os X': images[0],
		Ubuntu: images[1]
	};

	let select = document.querySelector('.form-control');
	select.addEventListener('change', () => {
		Array.from(select.children).forEach((option) => {
			let systemImage = operatingSystems[option.innerHTML];
			if (option.innerHTML === select.value) {
				systemImage.style.visibility = 'visible';
			} else {
				systemImage.style.visibility = 'hidden';
			}
		});
	});
});
