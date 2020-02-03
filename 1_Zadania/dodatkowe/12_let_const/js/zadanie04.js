//TODO: spróbuj zmienić zmienną name nadpisująć ją niżej innym imieniem.
const name = 'Agata';

// Taka próba skończy się błędem, ponieważ nie możemy zmienić wartości zmiennej const! Mówimy tutaj o zmiennej const która podczas definicji przechowuje typ prymitywny (wartościowy) - dla tak zdefiniowanej zmiennej const nie można zmienić wartości
// name = 'Dagmara';

//TODO:
//a) spróbuj zmienić zmienną simpleArray nadpisująć ją niżej inną tablicą.
//b) spróbuj dodać nową wartość do tablicy
//c) spróbuj zmienić którąkolwiek wartość z tablicy simpleArray
const simpleArray = [ 1, 2, 3, 4 ];

// Tutaj definiujemy zmienną const która przechowuje UWAGA: typ referencyjny! Tablica w JS jest obiektem, a więc typem referencyjnym. Różnica jest diametralna, ponieważ simpleArray przechowuje referencję do tablicy, a więc same wartośći tablicy mogą ulegać zmianie, ale nie możemy przypisać calkowicie nowej tablicy. Dlatego też podpunkt a) zakończy się błędem (i jest skomentowany), ale b) i c) są jak najbardziej ok, ponieważ manipulują jedynie wartościami tablicy
// simpleArray = [ 1, 2 ];
simpleArray.push(5);
simpleArray[0] = 0;
console.log(simpleArray);

//TODO:
//a) spróbuj zmienić zmienną dog nadpisująć ją niżej innym obiektem.
//b) spróbuj zmienić właśność skill obiektu dog
//c) spróbuj dodać nową własność do obiektu dog np. age
const dog = {
	name: 'Puszek',
	skill: 'killing'
};

// Ta sama historia co wyżej, ponieważ obiekt jest...obiektem, a więc typem referencyjnym, tak samo jak tablica. Są te same zasady - nie możemy przypisać do obiektu const całkowicie nowego obiektu, ale możemy obiekt  modyfikować dodająć własności i modyfikując istniejące
// dog = {
// 	car: 'Mercedes',
// 	color: 'black'
// };
dog.skill = 'eating';
dog.age = '1 year';
console.log(dog);
