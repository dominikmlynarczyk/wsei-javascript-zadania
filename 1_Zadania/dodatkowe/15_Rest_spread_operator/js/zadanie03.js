let people = [
	{
		person: 'Kim Yoo Suk',
		profession: 'tyczkarz'
	},
	{
		person: 'Sue Yoo',
		profession: 'prawnik'
	},
	{
		person: 'Dr. Alden Cockburn',
		profession: 'urolog'
	},
	{
		person: 'Rusty Kuntz',
		profession: 'trener'
	}
];

function setFunnyName(...args) {
	args.forEach((person) => people.push(person));
}

setFunnyName(
	{ person: 'Brygida Szwartzkoper', profession: 'kanclerz winiarni' },
	{ person: 'Ramotaj Przetutaj', profession: 'małyszomaniak' },
	{ person: 'Tati Hautameki', profession: 'tata skoczka' }
);

console.log(people);
