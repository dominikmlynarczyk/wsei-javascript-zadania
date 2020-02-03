let character = 'księżniczka';
let timeOfDay = 'dzień';
const lover = 'Shrek';

{
	let timeOfDay = 'noc';
	let character = 'ogrzyca';
	console.log('Teraz jest: ' + timeOfDay + ' i Fiona to: ' + character + ', a jej ukochany to: ' + lover);
	// TODO: Napisz, co kryje się pod zmiennymi i wyjaśnij dlaczego.
	// Zmienne let i const mają zasięg blokowy, nie kolidują jednak ze sobą nazewniczo, ponieważ zmienne timeOfDay i character nie są widoczne poza tym blokiem kodu w którym się znajdujemy teraz. Dzięki temu wartości które są wzięte pod uwagę w console.log() pochodzą od "najbliższych" zmiennych let. Zmienna lover nie zostaje tworzona w tym bloku, ale jest "wyżej" i ten blok ma do niej dostęp jak najbardziej. (zmienne let i const są widoczne w bloku ich zadeklarowania i blokach zagnieżdżonych)
}

console.log('Teraz jest: ' + timeOfDay + ' i Fiona to: ' + character + ', a jej ukochany to: ' + lover);
// TODO: Napisz, co kryje się pod zmiennymi i wyjaśnij dlaczego.
// Zmienne timeOfDay i character Z POWYŻSZEGO BLOKU są niewidocze już i na tym etapie brane są pod uwagę zmienne z linii od 1 do 3
