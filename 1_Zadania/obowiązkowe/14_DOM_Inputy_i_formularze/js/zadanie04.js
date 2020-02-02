document.addEventListener('DOMContentLoaded', () => {
	const creditCardNumber = document.querySelector('#name');
	const cardTypePlaceholder = document.querySelector('#type');

	creditCardNumber.addEventListener('input', () => {
		const enteredNumber = creditCardNumber.value;
		const cardType = checkCardType(enteredNumber);

		if (enteredNumber.length >= 2 && cardType === 'unknown') {
			creditCardNumber.style.backgroundColor = 'red';
		} else creditCardNumber.style.backgroundColor = 'white';

		if (cardType !== 'unknown') {
			cardTypePlaceholder.innerHTML = cardType;
		} else cardTypePlaceholder.innerHTML = '';

		if (isLongEnough(enteredNumber, cardType)) {
			if (isValid(enteredNumber, cardType)) {
				creditCardNumber.style.backgroundColor = 'lime';
			} else {
				creditCardNumber.style.backgroundColor = 'red';
			}
		}
	});

	function checkCardType(number) {
		if (number.startsWith('4')) {
			return 'Visa';
		}
		if (number.startsWith('5')) {
			return 'MasterCard';
		}
		if (number.startsWith('34') || number.startsWith('37')) {
			return 'American Express';
		}
		return 'unknown';
	}

	function isLongEnough(number, cardType) {
		return (
			(cardType === 'Visa' && number.length >= 13) ||
			(cardType === 'MasterCard' && number.length >= 16) ||
			(cardType === 'American Express' && number.length >= 15)
		);
	}

	function isValid(number, cardType) {
		return (
			(cardType === 'Visa' && number.length >= 13 && number.length <= 16) ||
			(cardType === 'MasterCard' && number.length === 16) ||
			(cardType === 'American Express' && number.length === 15)
		);
	}
});
