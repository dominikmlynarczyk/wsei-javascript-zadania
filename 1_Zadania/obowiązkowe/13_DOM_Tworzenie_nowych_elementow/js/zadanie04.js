document.addEventListener('DOMContentLoaded', () => {
	document.querySelector('#remove').addEventListener('click', function() {
		this.previousElementSibling.innerHTML = '';
	});
});
