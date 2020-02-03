document.addEventListener('DOMContentLoaded', () => {
	const firstAnchor = document.querySelector('article:first-of-type a');
	const secondAnchor = document.querySelector('article:last-of-type a');
	firstAnchor.addEventListener('click', () => {
		firstAnchor.nextElementSibling.style.display = 'block';
	});
	secondAnchor.addEventListener('mouseover', () => {
		secondAnchor.nextElementSibling.style.display = 'block';
	});
});
