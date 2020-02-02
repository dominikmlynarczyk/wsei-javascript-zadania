document.addEventListener('DOMContentLoaded', () => {
	const button = document.querySelector('.button');
	const ul = document.querySelector('ul');
	let counter = 0;

	button.addEventListener('click', () => {
		ul.appendChild(document.createElement('li')).innerHTML = `Element ${counter +
			1} - w chwili dodania było ${counter} elementów`;
		counter++;
	});
});
