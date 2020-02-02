document.addEventListener('DOMContentLoaded', () => {
	const list1 = document.getElementById('list1');
	const list2 = document.getElementById('list2');

	function moveToAnotherList(liElement) {
		if (liElement.parentElement.id === 'list1') {
			liElement.parentElement.removeChild(liElement);
			list2.appendChild(liElement);
		} else {
			liElement.parentElement.removeChild(liElement);
			list1.appendChild(liElement);
		}
	}

	[ list1, list2 ].forEach((list) => {
		list.addEventListener('click', (event) => {
			if (event.target.className === 'moveBtn') {
				const selectedLiElement = event.target.parentElement;
				moveToAnotherList(selectedLiElement);
			}
		});
	});
});
