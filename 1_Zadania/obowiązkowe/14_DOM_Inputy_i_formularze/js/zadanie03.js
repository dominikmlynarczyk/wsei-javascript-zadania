document.addEventListener('DOMContentLoaded', () => {
	const form = document.querySelector('form');

	form.addEventListener('submit', (event) => {
		addScores();
		event.preventDefault();
	});

	function isInputValid() {
		const firstTeamName = document.querySelector('#team1').value;
		const firstTeamScore = document.querySelector('#points1').value;
		const secondTeamName = document.querySelector('#team2').value;
		const secondTeamScore = document.querySelector('#points2').value;

		return firstTeamName !== secondTeamName && (firstTeamScore >= 0 && secondTeamScore >= 0);
	}

	function addScores() {
		if (isInputValid()) {
			const table = document.querySelector('table');
			const newRow = document.createElement('tr');

			const firstTeamName = document.createElement('td');
			firstTeamName.innerHTML = document.getElementById('team1').value;
			newRow.appendChild(firstTeamName);

			const secondTeamName = document.createElement('td');
			secondTeamName.innerHTML = document.getElementById('team2').value;
			newRow.appendChild(secondTeamName);

			const matchResult = document.createElement('td');
			matchResult.innerHTML = `${document.getElementById('points1').value} - ${document.getElementById('points2')
				.value}`;

			newRow.appendChild(matchResult);

			table.firstElementChild.appendChild(newRow);
		}
		return false;
	}
});
