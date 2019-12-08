document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania
     */

    // Zadanie 0
    const ex5 = document.querySelectorAll(".ex5 li");
    for(let i=0; i < ex5.length; i++) {
        if(i === 0 || i % 2 === 0) {
            ex5[i].style.backgroundColor = 'green';
        }
        if (i % 5 === 0) {
            ex5[i].classList.add('big');
        }
        if (i % 3 === 0 ) {
            ex5[i].style.textDecoration = "underline";
        }
    }

    // Zadanie 1
    const chromeLogo = document.querySelector('.chrome');
    const firefoxLogo = document.querySelector('.firefox');
    const edgeLogo = document.querySelector('.edge');

    chromeLogo.style.backgroundRepeat = 'no-repeat';
    firefoxLogo.style.backgroundImage = './assets/img/firefox.png'
    edgeLogo.style.backgroundImage = 'url("./assets/img/edge.png");'
    chromeLogo.style.width = '100px';
    chromeLogo.nextElementSibling.innerHTML = 'Chrome';

    chromeLogo.nextElementSibling.setAttribute('href', 'http://chrome.html');
    firefoxLogo.nextElementSibling.setAttribute('href', 'http://firefox.html');
    edgeLogo.nextElementSibling.setAttribute('href', 'http://edge.html')

});