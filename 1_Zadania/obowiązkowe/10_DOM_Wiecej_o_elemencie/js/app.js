document.addEventListener('DOMContentLoaded', function() {
	/*
    Poniżej napisz kod rozwiązujący zadania
     */

	// Zadanie 0
	const ex5 = document.querySelectorAll('.ex5 li');
	for (let i = 0; i < ex5.length; i++) {
		if (i === 0 || i % 2 === 0) {
			ex5[i].style.backgroundColor = 'green';
		}
		if (i === 4) {
			ex5[i].classList.add('big');
		}
		if (i % 3 === 0) {
			ex5[i].style.textDecoration = 'underline';
		}
	}

	// Zadanie 1
	const chromeLogo = document.querySelector('.chrome');
	const firefoxLogo = document.querySelector('.firefox');
	const edgeLogo = document.querySelector('.edge');

	chromeLogo.style.backgroundRepeat = 'no-repeat';
	chromeLogo.style.width = '100px';
	chromeLogo.nextElementSibling.innerHTML = 'Chrome';

	edgeLogo.style.backgroundImage = 'url("assets/img/edge.png")';
	edgeLogo.nextElementSibling.setAttribute('href', 'https://www.microsoft.com/en-us/windows/microsoft-edge');

	firefoxLogo.style.backgroundImage = 'url("assets/img/firefox.png")';
	const firefoxAnchor = firefoxLogo.parentNode.querySelector('a');
	firefoxAnchor.setAttribute('href', 'https://www.mozilla.org/en-US/firefox/new/');
	firefoxAnchor.innerHTML = 'Firefox';

	// Zadanie 2
	const name = document.querySelector('.ex2 #name');
	const favouriteColor = document.querySelector('.ex2 #fav_color');
	const favouriteMeal = document.querySelector('.ex2 #fav_meal');

	name.innerHTML = 'Dominik Młynarczyk';
	favouriteColor.innerHTML = 'Żółty';
	favouriteMeal.innerHTML = 'Curry Balti Paneer';

	// Zadanie 3
	document.querySelector('.ex3 ul').classList.add('menu');

	const ex3menuLi = Array.from(document.querySelectorAll('.ex3 li'));
	ex3menuLi.forEach((el) => {
		if (!el.classList.contains('menuElement')) {
			el.classList.add('menuElement');
		}
		if (el.classList.contains('error')) {
			el.classList.remove('error');
		}
	});

	// Zadanie 4
	const ex4MenuLi = Array.from(document.querySelectorAll('.ex4 li'));
	ex4MenuLi.forEach((el, i) => {
		el.dataset['id'] = i + 1;
	});
});
