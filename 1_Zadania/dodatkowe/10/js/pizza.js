document.addEventListener('DOMContentLoaded', () => {
	const checkboxes = document.querySelectorAll('[type="checkbox"]');
	const selectAll = checkboxes[0];
	const clearAll = checkboxes[checkboxes.length - 1];
	console.log(checkboxes);
	const showPrice = document.querySelector('#price');

	const prices = Array.from(checkboxes).filter((el) => el.hasAttribute('data-price'));

	function calculatePrice() {
		return prices.reduce((sum, current) => {
			if (current.checked === true) {
				sum = sum + parseFloat(current.dataset.price);
			}
			return sum;
		}, 0);
	}

	function updatePrice(price) {
		showPrice.innerHTML = price.toFixed(2) + 'zł';
	}

	checkboxes.forEach((el) => {
		el.addEventListener('click', () => {
			updatePrice(calculatePrice());
		});
	});

	selectAll.addEventListener('click', () => {
		prices.forEach((el) => (el.checked = true));
		updatePrice(calculatePrice());
	});

	clearAll.addEventListener('click', () => {
		prices.forEach((it) => (it.checked = false));
		selectAll.checked = false;
		clearAll.checked = false;
		updatePrice(0);
	});
});
