# Tablice wielowymiarowe &ndash; zadania

> Odpowiedzi wpisz w pliku **app.js**, chyba że treść polecenia wskazuje inaczej.
Pamiętaj, żeby oddzielać ćwiczenia komentarzami i pisać czytelny, dobrze sformatowany kod.

### Zadanie 0 Sprawdzanie tablicy wielowymiarowej  (~ 10min - 15min)

Napisz funkcję ```checkArray``` przyjmującą jako argument tablicę dwuwymiarową z liczbami całkowitymi.
Funkcja ma zwrócić nową tablicę, w której kolejnymi elementami będą wartości boolean ```true``` lub ```false```, zależne od tego, czy każdy element tablicy drugiego wymiaru jest parzysty.

```JavaScript
var arr = [
[11, 12],
[42, 2],
[-4, -120],
[0, 0],
[1, 34],
];

output

var arrayCheck = [
false, // bo 11
true,
true,
true,
false, // bo 1
];
```


### Zadanie 1 (~ 5min - 10 min)

W pliku **app.js** masz tablicę o nazwie ```task1Array```. Następnie:
  1. Wypisz element znajdujący się w położeniu 3,2.
  2. Wypisz długość tablicy znajdującej się w drugim rzędzie.
  3. Wypisz element znajdujący się w położeniu 4,2.

### Zadanie 2 (~ 10min - 15 min)

W pliku **app.js** masz tablicę o nazwie ```task2Array```.
  1. W pętli wypisz zawartość pierwszego wymiaru naszej tablicy.
  2. W pętli wypisz długość tablic składających się na 2gi wymiar.
  3. W pętli wypisz wszystkie elementy tablicy 2 wymiarowej (musisz użyć do tego zagnieżdżonej pętli **for**).

### Zadanie 3 (~ 5min - 10 min)

Napisz funkcje ```print2DArray```, która będzie przyjmować  jako argument tablicę dwuwymiarową. Następnie funkcja ma wypisać w konsoli zawartość tej tablicy.

Przykład:

```JavaScript
input:

[[1,2], [3,4]]

output:

1
2
3
4
```

### Zadanie 4 (~ 5min - 10 min)

Stwórz ręcznie dwuwymiarową tablicę. Wypisz ją w konsoli za pomocą funkcji z zadania poprzedniego ```print2DArray```.

### Zadanie 5 (~ 15min - 20 min)

Napisz funkcję ```create2DArray```, która przyjmuje dwa argumenty w postaci dwóch liczb całkowitych ```rows``` i ```columns```. Zadaniem funkcji jest stworzenie i zwrócenie dwuwymiarowej tablicy o podanej liczbie rzędów i kolumn. Każda komórka ma być wypełniona kolejną liczbą całkowitą. Pamiętaj o tym, że tablica ta ma zostać zwrócona przez funkcję inaczej zadanie będzie nie zaliczone.
Hint: Musisz użyć pętli zagnieżdżonych.

```JavaScript
create2DArray(4,4) =>

[ [1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12],  [13, 14, 15, 16] ];
 ```