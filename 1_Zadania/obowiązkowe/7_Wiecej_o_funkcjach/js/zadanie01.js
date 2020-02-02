/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

// Dla ustalenia terminologii: przyjmuję, że definicja funkcji zawiera deklarację funkcji + ciało funkcji. Dla zmiennej przyjmuję, że definicja = deklaracja + inicjalizacja
// W razie problemów, dla uproszczenia można przyjąć, że pojęcia definicja i deklaracja są równoważne

// Definicja funkcji sortArray()
function sortArray() {
	// Definicja tablicy (zasięg funkcyjny - sortArray())
	var points = [ 41, 3, 6, 1, 114, 54, 64 ];

	// Wywołanie wbudowanej funkcji sort() sortującej tablicę. Jako parametr przyjmuje funkcję porównującą elementy, brak parametru oznacza sortowanie tablicy w porządku leksykograficznym
	// Więcej info - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
	points.sort(function(a, b) {
		// Za pomocą return możemy określić w jaki sposób mają być porównywane wartości - tutaj sortujemy rosnąco. Mają być zwracane wartości mniejsze od zera (jeśli b>a), zero (jeśli a==b), lub większe od zera (jeśli a>b).
		// Zapis postaci b - a spowodowałby dla przykładu sortowanie wartości malejąco
		return a - b;
	});

	// Zwrócenie posortowanej tablicy
	return points;
}

// Wywołanie funkcji sortArray()
sortArray();
