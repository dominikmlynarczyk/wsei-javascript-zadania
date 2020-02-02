document.addEventListener('DOMContentLoaded', () => {
	const parentElement = document.querySelectorAll('.parent');

	// Zadanie 0a

	parentElement.forEach((el) => {
		el.addEventListener('mouseover', () => {
			el.firstElementChild.style.display = 'block';
		});

		// KOD ZAKOMENTOWANY ABY ZADANIE 0b MOGŁO DZIAŁAĆ!!!
		// el.addEventListener('mouseleave', () => {
		// 	el.firstElementChild.style.display = 'none';
		// });

		// Zadanie 0b
		el.addEventListener('mouseleave', hideChildrenElement);
	});

	// Zadanie 0b
	function hideChildrenElement() {
		this.firstElementChild.style.display = 'none';
	}
});
