document.addEventListener('DOMContentLoaded', () => {
	const buttons = document.querySelectorAll('button');
	const counter = document.querySelector('.counter');

	buttons.forEach((el) =>
		el.addEventListener('click', () => {
			counter.innerHTML = counter.innerHTML * 1 + 1;
		})
	);
});
