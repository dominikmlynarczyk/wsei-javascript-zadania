var planets = [
	{
		name: 'Merkury',
		numberOfMoons: 0
	},
	{
		name: 'Wenus',
		numberOfMoons: 0
	},
	{
		name: 'Ziemia',
		numberOfMoons: 1
	},
	{
		name: 'Mars',
		numberOfMoons: 2
	},
	{
		name: 'Jowisz',
		numberOfMoons: 63
	},
	{
		name: 'Saturn',
		numberOfMoons: 60
	},
	{
		name: 'Uran',
		numberOfMoons: 27
	},
	{
		name: 'Neptun',
		numberOfMoons: 13
	}
];

function sortPlanet(planets) {
	return planets.sort((b, a) => {
		return a.numberOfMoons - b.numberOfMoons;
	});
}

console.log(sortPlanet(planets));
