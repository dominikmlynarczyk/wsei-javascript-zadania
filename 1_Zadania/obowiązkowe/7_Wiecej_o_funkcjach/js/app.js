/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

// Dla ustalenia terminologii: przyjmuję, że definicja funkcji zawiera deklarację funkcji + ciało funkcji. Dla zmiennej przyjmuję, że definicja = deklaracja + inicjalizacja
// W razie problemów, dla uproszczenia można przyjąć, że pojęcia definicja i deklaracja są równoważne

// Definicja funkcji jeden()
function jeden() {
	// Definicja zmiennej var. Ma ona zasięg funkcyjny, co oznacza, że jest ona widoczna tylko w obrębie tej funkcji, czyli funkcji jeden(), a także w funkcjach które są zagnieżdżone w tejże funkcji (zawierają się w niej) - tutaj: widoczna będzie w funkcji dwa().
	var zmienna1 = 1;

	//Definicja funkcji dwa()
	function dwa() {
		// zmienna1 jest widoczna wewnątrz funkcji dwa(), ponieważ zagnieżdżone funkcje mają dostęp do zmiennych z "funkcji-rodzica"
		console.log(zmienna1);

		// Tutaj właściwie ten sam komentarz co przy zmienna1, ale zaznaczam, że zmienna2 ma zasięg funkcyjny, więc poza funkcją dwa() już nie będzie widoczna, czyli funkcja jeden() nie ma do niej dostępu!!!
		var zmienna2 = 3;
	}

	// Wywołanie funkcji dwa().
	dwa();

	// BŁAD! Ta zmienna nie jest widoczna w funkcji jeden() - wytłumaczone w komentarzu zmienna2
	console.log(zmienna2);
}

// Wywołanie funkcji jeden()
jeden();
