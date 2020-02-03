document.addEventListener('DOMContentLoaded', () => {
	console.log('Działa');
	const tooltips = document.querySelectorAll('.tooltip');
	tooltips.forEach((tooltip) => {
		console.log(tooltip);
		tooltip.addEventListener('mouseover', () => {
			console.log('Najechano!');
			const newElement = document.createElement('span');
			newElement.innerText = 'Text tooltipa';
			newElement.classList.add('tooltipText');
			tooltip.append(newElement);
		});
		tooltip.addEventListener('mouseout', () => {
			console.log('Opuszczono!');
			tooltip.removeChild(tooltip.lastElementChild);
		});
	});
});

// Strona działa cudownie! Nic się nie sypie!
