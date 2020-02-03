// Usunąłem poprzednią zawartość, bo chyba była przez pomyłkę

// Zadanie 0
function whoAreYou() {
	return `Hi my name is ${person.name} ${person.lastName}
I am ${person.yearOfBirth}.
My proffesion is ${person.proffesion}`;
}

const person = {
	name: 'Vlad',
	lastName: 'Drăculea',
	yearOfBirth: 1431,
	proffesion: 'Lord of Wallachia'
};

console.log(whoAreYou(person));

// Zadanie 1
const sampleValue = 5;
const sampleValue2 = 31;

console.log(`Suma dwóch liczb ${sampleValue} i ${sampleValue2} to: ${sampleValue + sampleValue2}`);

// Zadanie 2
const myName = 'Dominik';
console.log(`Moje imię i nazwisko to: ${myName} Młynarczyk`);

// Zadanie 3
function printText() {
	console.log(`"Myślę, że jest wiele piękna
w posiadaniu problemów.
To jeden ze sposobów w jaki się uczymy"
Herbie Hancock`);
}

printText();

// Zadanie 4
const button = {
	value: 'Send message',
	idName: 'sendMsg',
	width: '100px',
	padding: '20px'
};

console.log(`To jest button.
Jego szerokość to ${parseInt(button.width, 10) + 2 * parseInt(button.padding)}.
Napis, który na nim widnieje to "${button.value}"`);
