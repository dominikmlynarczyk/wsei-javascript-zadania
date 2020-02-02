document.addEventListener('DOMContentLoaded', () => {
	const div = document.querySelector('#box');
	const globalX = document.querySelector('#globalX');
	const globalY = document.querySelector('#globalY');
	const localX = document.querySelector('#localX');
	const localY = document.querySelector('#localY');

	div.addEventListener('mouseover', (event) => {
		globalX.innerHTML = event.screenX;
		globalY.innerHTML = event.screenY;
		localX.innerHTML = event.offsetX;
		localY.innerHTML = event.offsetY;
	});
});
