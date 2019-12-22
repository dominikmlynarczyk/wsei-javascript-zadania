"use strict";

document.addEventListener('DOMContentLoaded', () => {
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    const divitis = document.querySelectorAll('.box');

    divitis.forEach((el) => {
        el.addEventListener('click', function () {
            console.log(this);  
        })
    })
})

