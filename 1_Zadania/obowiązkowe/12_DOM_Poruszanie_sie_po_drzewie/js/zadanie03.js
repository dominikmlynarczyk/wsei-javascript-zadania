document.addEventListener('DOMContentLoaded', () => {
	const divElements = document.querySelectorAll('div');

	divElements.forEach((div) => {
		div.addEventListener('mouseover', function() {
			this.querySelector('li:first-child').style.backgroundColor = 'red';
			this.querySelector('li:last-child').style.backgroundColor = 'blue';
			this.querySelector('li:not(:first-child):not(:last-child)').style.backgroundColor = 'green';
		});
	});
});
