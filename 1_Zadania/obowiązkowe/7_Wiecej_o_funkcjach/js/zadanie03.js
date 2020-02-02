sayHello();

function sayHello() {
	console.log('Cześć');
}

sayHello();

// KOMENTARZ DO POWYŻSZEGO KODU:
// Powodem dla którego możliwe jest wywołanie funkcji sayHello() przed jej definicją jest mechanizm Hoisting (tłum. wynoszenie / windowanie) który jest aplikowany do definicji zmiennych var i funkcji. W skrócie działa on w taki sposób, że silnik jS wyszukuje wszystkie deklaracje zmiennych i funkcji w danym zakresie funkcyjnym (tutaj zakresie globalnym) i przenosi je na początek.

// Błąd! Wytłumaczenie niżej.
sayWelcome();

const sayWelcome = function() {
	console.log('Witaj');
};

sayWelcome();

// Nie rozpisując się - wyrażenia funkcyjne nie podlegają opisanemu wyżej mechanizmowi hoistingu, dlatego powyższy kod jest błędny, bo nie można wywołać sayWelcome() przed definicją!
