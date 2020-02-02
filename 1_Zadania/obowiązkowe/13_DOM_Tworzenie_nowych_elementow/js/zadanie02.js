document.addEventListener('DOMContentLoaded', () => {
	const orderId = document.querySelector('#orderId');
	const item = document.querySelector('#item');
	const quantity = document.querySelector('#quantity');
	const ordersTable = document.querySelector('#orders tbody');
	const appendBtn = document.querySelector('#addBtn');

	appendBtn.addEventListener('click', () => {
		if (orderId.value !== '' && item.value !== '' && quantity.value !== '') {
			ordersTable.appendChild(
				document.createElement('tr')
			).innerHTML = `<td>${orderId.value}</td><td>${item.value}</td><td>${quantity.value}</td>`;
		} else {
			console.log('Pole formularza nie wypełnione!');
		}
	});
});
