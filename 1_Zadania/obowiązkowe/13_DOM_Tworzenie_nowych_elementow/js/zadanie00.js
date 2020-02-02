document.addEventListener('DOMContentLoaded', () => {
	const ordersTable = document.querySelector('#orders');
	ordersTable.addEventListener('click', (event) => {
		if (event.target.className === 'deleteBtn') {
			const table = event.target.parentElement.parentElement.parentElement;
			const currentRow = event.target.parentElement.parentElement.rowIndex;
			table.deleteRow(currentRow);
		}
	});
});
