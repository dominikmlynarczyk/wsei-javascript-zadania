// Usunąłem jakieś rzeczy które tutaj się znalazły chyba przez przypadek

// Zadanie 0
const sampleConst = 1;
let sampleLet = 2;

for (var i = sampleConst; i < sampleLet; i++) {
	console.log(`W petli const: ${sampleConst}`);
	console.log(`W petli let: ${sampleLet}`);
}

function sampleFun() {
	console.log(`W funkcji const: ${sampleConst}`);
	console.log(`W funkcji let: ${sampleLet}`);
}

sampleFun();

{
	console.log(`W bloku const: ${sampleConst}`);
	console.log(`W bloku let: ${sampleLet}`);
}

// Zadanie 3
for (var i = 0; i < 10; i++) {
	console.log(`Wartość zmiennej var: ${i}`);
}

// Zostanie wypisana wartość po wszystkich iteracjach, czyli 10. Powodem jest to, że zmienna var ma zasięg funkcyjny i nie jest ograniczony blokiem kodu jaki np. tworzy pętla for. Dlatego może być niebezpieczne użycie zmiennej var w pętli, ponieważ taka zmienna będzie ciągle widoczna poza ciałem pętli!
console.log(`Wartość zmiennej var: ${i}`);

for (let j = 0; i < 10; i++) {
	console.log(`Wartość zmiennej var: ${j}`);
}

// Poniższa próba wypisania zmiennej j spowoduje błąd, bo na tym etapie zmienna j już nie jest widoczna. Zmienna j jest zadeklarowana jako let więć ma zasięg blokowy, po opuszczeniu pętli jest ona już niewidoczna!!!
// console.log(`Wartość zmiennej var: ${j}`);

// Zadanie 5
(function() {
	console.log('Hello world');
})();

// Zadanie 6
(function(name) {
	console.log(name);
})('Dominik');
