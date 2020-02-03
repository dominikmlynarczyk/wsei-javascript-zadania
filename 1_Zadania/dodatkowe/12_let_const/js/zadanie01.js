// Nie do końca rozumiem co ma znaczyć "A1 wypisywanie zmiennej przed deklaracja" w poniższym kodzie, więc przyjmuję taki kod jaki jest w zadaniu.

// Jeżeli miałbym przenieść numbers i PI pomiędzy console.log() w obu blokach to wywołanie zmiennej const albo let przed jej utworzeniem spowoduje błąd, bo zmienne te NIE SĄ HOISTOWANE jak var

//I. Sprawdź najpierw zasięg let
let numbers = [ 2, 3, 4 ];
{
	//A1 - wypisuję zmienną numbers przed deklaracją
	//Wynik w konsoli to TODO: (3) [2, 3, 4]
	//Dlaczego taki wynik? TODO: Zmienne let i const mają zasięg blokowy co powoduje, że są widoczne w danym bloku i w blokach zagnieżdżonych. Zmienna numbers jest "wyżęj" aktualnego bloku więc jest tutaj widoczna
	console.log(numbers);

	//A2 - wypisuję zmienną numbers po deklaracji
	//Wynik w konsoli to TODO: (3) [2, 3, 4]
	//Dlaczego taki wynik? TODO: Zmienne let i const mają zasięg blokowy co powoduje, że są widoczne w danym bloku i w blokach zagnieżdżonych. Zmienna numbers jest "wyżęj" aktualnego bloku więc jest tutaj widoczna
	console.log(numbers);
}

//A3 - wypisuję zmienną numbers za blokiem
//Wynik w konsoli to TODO: (3) [2, 3, 4]
//Dlaczego taki wynik? TODO: Zmienna numbers jest zdefiniowana wcześniej, więc możemy się do niej odwołać. Gdyby była zadeklarowana wewnątrz powyższego bloku to tutaj nie byłaby widoczna i otrzymalibyśmy błąd ReferenceError w konsoli (WŁAŚNIE W WYNIKU POSIADANIA ZASIĘGU BLOKOWEGO)
console.log(numbers);

//II. Sprawdź teraz  zasięg const
const PI = 3.14;
{
	//A1 - wypisuję zmienną PI przed deklaracją
	//Wynik w konsoli to TODO: 3.14
	//Dlaczego taki wynik? TODO: const także ma zasięg blokowy, czyli jest widoczna w bloku w którym została zdefiniowana jak i blokach zagnieżdżonych
	console.log(PI);

	//A2 - wypisuję zmienną PI po deklaracji
	//Wynik w konsoli to TODO: 3.14
	//Dlaczego taki wynik? TODO: const także ma zasięg blokowy, czyli jest widoczna w bloku w którym została zdefiniowana jak i blokach zagnieżdżonych
	console.log(PI);
}

//A3 - wypisuję zmienną PI za blokiem
//Wynik w konsoli to TODO: 3.14
//Dlaczego taki wynik? TODO: Zmienna PI jest zdefiniowana wcześniej, więc możemy się do niej odwołać. Gdyby była zadeklarowana wewnątrz powyższego bloku to tutaj nie byłaby widoczna i otrzymalibyśmy błąd ReferenceError w konsoli (WŁAŚNIE W WYNIKU POSIADANIA ZASIĘGU BLOKOWEGO)
console.log(PI);
