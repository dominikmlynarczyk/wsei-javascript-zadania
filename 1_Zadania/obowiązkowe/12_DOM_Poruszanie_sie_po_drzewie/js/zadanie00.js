document.addEventListener('DOMContentLoaded', () => {
	const element1 = document.querySelector('.first').children[0].children[2];
	console.log(element1);

	const element2 = document.querySelector('#second').parentElement.children[3];
	console.log(element2);

	const ul = document.querySelector('[data-ex="third"]').parentElement.parentElement.lastElementChild
		.firstElementChild;

	const element3 = ul.children[parseInt(ul.children.length / 2).toString()];
	console.log(element3);

	const element4 = document.querySelector('.forth').parentElement.querySelector('article p:nth-of-type(2)');
	console.log(element4);
});
