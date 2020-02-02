'use strict';

document.addEventListener('DOMContentLoaded', () => {
	document.addEventListener(
		'click',
		(el) => {
			let idOfClicked = el.target.id;
			if (idOfClicked !== '') {
				document.getElementById(idOfClicked).style.backgroundColor = `#${Math.floor(Math.random() * 16777)}`;
			}
		},
		false
	);
});
