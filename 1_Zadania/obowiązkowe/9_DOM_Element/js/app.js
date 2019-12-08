document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;
    // Zadanie 0
    // function getDatasInfo(elements) {
    //     var newArray = [];
    //     for (let i = 0; i<elements.length; i++) {
    //         newArray.push(elements[i].getAttibute('data-color'));
    //     }
    //     console.log(newArray);
    //     return NewArray
    // }

    /*
    Poniżej napisz kod rozwiązujący zadania
     */
    // getDatasInfo(links);

    // Zadanie 1



    // Zadanie 2
    for (el of blocks) {
        console.log(el.innerHTML);
        console.log(el.outerHTML);
        el.innerHTML = "Nowa wartość diva o klasie blocks";
        console.log(el.innerHTML);
        console.log(el.outerHTML);
    }


    // Zadanie 3
    var mainFooter = document.querySelector('#mainFooter');
    function getID(element) {
        console.log(element.id);
        return element.id;
    }

    getID(mainFooter);

    // Zadanie 4

    function getTags(elements) {
        let arr1 = [];

        for (let i = 0; i < elements.length; i++) {
            arr1.push(elements[i].tagName);
        }

        console.log(arr1);
        return arr1;
    }

    getTags(childElements);

    // Zadanie 5

    function getClassInfo(elements) {
        const newArray = [];
        for (let i = 0; i < elements.classList.length; i++) {
            newArray.push(elements.classList[i]);
        }

        console.log(newArray);
        return newArray;
    }

    getClassInfo(banner);

    // Zadanie 6

    const liElements = document.querySelectorAll('nav li');

    function setDataDirection(elements) {
        for(item of elements) {
            if(!item.getAttribute('data-direction')) {
                item.setAttribute('data-direction', 'top');
            }
        }
    }

    setDataDirection(liElements);
});
