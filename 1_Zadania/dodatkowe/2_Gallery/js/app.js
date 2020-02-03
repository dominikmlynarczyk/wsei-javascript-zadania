document.addEventListener('DOMContentLoaded', () => {
	console.log('Działa');

	const liElements = document.querySelectorAll('li');
	const bodyElement = document.querySelector('body');

	console.log(liElements);
	console.log(bodyElement);

	for (let i = 0; i < liElements.length; i++) {
		liElements[i].addEventListener('click', function(event) {
			console.log('Działa');
			console.log(this.firstElementChild.src);

			const newDiv = document.createElement('div');
			newDiv.classList.add('fullScreen');

			const newImg = document.createElement('img');
			const imgSrc = this.firstElementChild.getAttribute('src');
			newImg.setAttribute('src', imgSrc);

			const newBtn = document.createElement('button');
			newBtn.classList.add('close');
			newBtn.innerHTML = 'Close';

			newBtn.addEventListener('click', function(event) {
				bodyElement.removeChild(newDiv);
			});

			newDiv.appendChild(newImg);
			newDiv.appendChild(newBtn);

			bodyElement.appendChild(newDiv);
		});
	}
});

// Wszystko działa :) Problemów nie widać
