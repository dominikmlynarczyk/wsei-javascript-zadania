
var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];


var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

// Zadanie 0

function checkArray(ddarray) {
    var result = [];
    for(let i = 0; i < ddarray.length; i++) {
        const isNotOdd = ddarray[i].filter(number => number % 2 != 0).length > 0;
        result.push(!isNotOdd);
    }
    return result;
}

checkArray([
    [11, 12],
    [42, 2],
    [-4, -120],
    [0, 0],
    [1, 34],
]);

// Zadanie 1

console.log(task1Array[3][2]);

console.log(task1Array[1].length);

console.log(task1Array[4][2]);

// Zadanie 2

for (let i = 0; i < task2Array.length; i++) {
    console.log(task2Array[i]);
}

for (let i = 0; i < task2Array.length; i++) {
    console.log(task2Array[i].length);
}

for (let i = 0; i < task2Array.length; i++) {
    for (let j = 0; j < task2Array[i].length; j++) {
        console.log(task2Array[i][j]);
    }
}

// Zadanie 3

function print2DArray(task2Array) {
    for (let i = 0; i < task2Array.length; i++) {
        for (let j = 0; j < task2Array[i].length; j++) {
            console.log(task2Array[i][j]);
        }
    }
}

print2DArray([[1,2], [3,4]]);

// Zadanie 4

var task3Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
]

print2DArray(task3Array);

// Zadanie 5

function create2DArray(rows, columns){
    var counter = 1;
    var array1 = [];
    for(let i = 0; i < rows; i++) {
        var array2 = [];
        for(let j = 0; j < columns; j++) {
            array2.push(counter);
            counter++;
        }
        array1.push(array2);
    }
    return array1;
}

create2DArray(4, 4);