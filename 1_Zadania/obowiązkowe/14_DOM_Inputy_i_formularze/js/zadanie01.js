document.addEventListener('DOMContentLoaded', () => {
	const invoiceCheckbox = document.querySelector('#invoice');
	let invoiceData = document.querySelector('#invoiceData');

	function isChecked() {
		if (invoiceCheckbox.checked) {
			invoiceData.style.visibility = 'visible';
		} else {
			invoiceData.style.visibility = 'hidden';
		}
	}

	invoiceCheckbox.addEventListener('click', isChecked);

	// Ukrycie pól faktury na początku
	isChecked();
});
