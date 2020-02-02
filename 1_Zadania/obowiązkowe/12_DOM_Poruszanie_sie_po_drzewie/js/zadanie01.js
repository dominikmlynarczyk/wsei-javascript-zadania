document.addEventListener('DOMContentLoaded', () => {
	const buttons = document.querySelectorAll('.button');

	function toggleVisibility() {
		const box = this.nextElementSibling;
		const visibilityValue = window.getComputedStyle(box).visibility;

		if (box != null && visibilityValue === 'visible') {
			box.style.visibility = 'hidden';
		} else if (box != null && visibilityValue === 'hidden') {
			box.style.visibility = 'visible';
		} else {
			console.log('Error');
		}
	}

	buttons.forEach((button) => {
		button.addEventListener('click', toggleVisibility);
	});
});
