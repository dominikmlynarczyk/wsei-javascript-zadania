document.addEventListener('DOMContentLoaded', () => {
	let windowWidth = document.getElementById('windowWidth');
	let windowHeight = document.getElementById('windowHeight');

	function showWindowSize() {
		windowWidth.innerHTML = window.innerWidth;
		windowHeight.innerHTML = window.innerHeight;
	}

	showWindowSize();

	window.addEventListener('resize', showWindowSize);
});
