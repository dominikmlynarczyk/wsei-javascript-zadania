
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