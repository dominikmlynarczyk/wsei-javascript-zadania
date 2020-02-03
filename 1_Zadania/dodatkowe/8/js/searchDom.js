// 1)
const menu = document.querySelector('#menu');

function getDataInfo(element) {
	const array = [];
	Array.from(menu.children).forEach((li) => {
		array.push(li.getAttribute('data-info'));
	});
	return array;
}

console.log(getDataInfo(menu));

// 2)
const mainContener = document.querySelector('#main-contener');

function getElementClass(element) {
	const array = [];
	for (let i = 0; i < element.classList.length; i++) {
		array.push(element.classList.item(i));
	}
	return array;
}

console.log(getElementClass(mainContener));

// 3)
const pinkColor = document.querySelector('.pink-color');

function getElementText(element) {
	return element.innerText;
}

console.log(getElementText(pinkColor));

// 4)
const images = document.querySelectorAll(`.images`);

function getElementAlt(element) {
	const array = [];
	element.forEach((image) => {
		array.push(image.getAttribute('alt'));
	});
	return array;
}

console.log(getElementAlt(images));

// 5)
const links = document.querySelectorAll(`.my-link`);

function getElementHref(element) {
	const array = [];
	element.forEach((link) => {
		array.push(link.getAttribute('href'));
	});
	return array;
}

console.log(getElementHref(links));
