document.addEventListener('DOMContentLoaded', () => {
	var menu = document.querySelector('#menu');
	var paragraf = document.querySelector('p');

	menu.classList.add('menu');
	paragraf.innerHTML = 'A to jest paragraf w zadaniu 1';
});

// 1. Kod JavaScript umieszczony w sekcji head jest wykonywany przed pełnym zaladowaniem drzewa DOM. Błąd pojawiał się ponieważ próbowaliśmy pracować z drzewem DOM przed jego załadowaniem.

// 2. Tak, to poprawi sytuację, bo zdarzenie DOMContentLoaded sprawdza czy drzewo DOM zostało w pełni i poprawnie załadowane. Dzięki temu mamy pewność, że praca z drzewem DOM wewnątrz eventu jest zadziała poprawnie.

// 3. Przy założeniu, że DOMContentLoaded pozostanie z podpunktu nr. 2 nie się nie zmieni. Gdybyśmy usunęli DOMContentLoaded TEORETYCZNIE drzewo DOM może się załadować, ale nie mamy 100% pewności. Najbezpieczniej jest więc dołączyć skrypt na końcu kodu HTML + wykorzystać event DOMContentLoaded

// Dodatkowo - ciekawa dyskusja na jaką się natknąłem przy sprawdzaniu co się stanie w przypadku nie użycia DOMContentLoaded, dołączeniu skryptów w sekcji head, ale z użyciem atrybutu defer - https://stackoverflow.com/questions/42950574/are-deferred-scripts-executed-before-domcontentloaded-event
