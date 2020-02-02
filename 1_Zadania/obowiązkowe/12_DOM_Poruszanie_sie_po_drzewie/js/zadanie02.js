document.addEventListener('DOMContentLoaded', () => {
	const buttons = document.querySelectorAll('.button');

	EventTarget.prototype.changeColor = function() {
		this.parentElement.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
	};

	buttons.forEach((button) => {
		button.addEventListener('click', (event) => {
			event.target.changeColor();
		});
	});
});
