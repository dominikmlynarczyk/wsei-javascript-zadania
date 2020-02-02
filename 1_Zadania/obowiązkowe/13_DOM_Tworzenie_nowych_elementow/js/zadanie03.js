document.addEventListener('DOMContentLoaded', () => {
	document.querySelector('.button').addEventListener('click', function() {
		this.parentElement.removeChild(this);
	});
});
