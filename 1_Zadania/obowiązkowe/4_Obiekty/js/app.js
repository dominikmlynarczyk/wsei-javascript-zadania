// Zadanie 0

const city = {                
    capital: "Warszawa",          
    population: 2000000,
    president: "Trzaskowski",
    primeMinisters: ["Adam", "Bogdan"]
}; 

console.log(city.capital + city.population + city.president + city.primeMinisters);

const timeMachine = {
    shape: "Portal",
    model: "",
    run : function (date, place) {
        console.log (`Przeniosłeś się do ${place} i jest obecnie ${date}`);
    }
};

timeMachine.run("20-11-2030", "Sydney");

// Zadanie 1

const book = {
    title: "test",
    author: "author",
    numberOfPages: "number"
};

for (const key of book) {
    console.log(book[key]);
}

// Zadanie 2

var person = {
    name: "Andrzej",
    age: 12,
    sayHello: function() {
        console.log("hello");
    }
};

console.log(person.name);
console.log(person.age);
person.sayHello();

// Zadanie 3

const recipe = {
    title = 'przepis',
    servings = 0
};

recipe.ingredients = [];
recipe.addIngredient = function(ingredient) {
    this.ingredient.push(ingredient);
    this.servings++;
};

recipe.addIngredient("Składnik 1");
recipe.addIngredient("Składnik 2");

console.log(recipe.title);
console.log(recipe.servings);
console.log(recipe.ingredients);


// Zadanie 4

var movie = {
    director: "Peter Jackson",
    writers: [" J.R.R. Tolkien ", "Fran Walsh", "Philippa Boyens", "Peter Jackson"],
    stars: ["Elijah Wood", "Ian McKellen", "Orlando Bloom"],
    country: "New Zealand | USA",
    budget: "$93,000,000",
    imdbPoints: 8.8,
    year: 2001,
    time: "2h 58 min",
    category: " Adventure, Drama, Fantasy"
}

for (const show in movie) {
    console.log(moive[show]);
}

// Zadanie 5 

var animals = [
    {
        type: "cat",
        breed: "persian",
        name: "Tiberius",
        health: [
            {
                date: "2012-03-03",
                visitType: "grafting"
            },
            {
                date: "2015-06-23",
                visitType: "bowel surgery"
            }
        ]
    },
    {
        type: "Guinea pig",
        breed: "The Rex",
        name: "Marko",
        health: [
            {
                date: "2015-12-04",
                visitType: "grafting"
            },
            {
                date: "2016-03-15",
                visitType: "ear cleaning"
            }
        ]
    }

]

for (let index = 0; index = animal.length; index++) {
    for (const key in animal[index]) {
        console.log(animals[index][key]);
    }
}

// Zadanie 6

var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist  = false;
console.log(spoon.isExist);