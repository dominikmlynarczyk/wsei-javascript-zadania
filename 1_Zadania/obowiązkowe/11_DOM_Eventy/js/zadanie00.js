const parentElement = document.querySelector('.parent');

parentElement.forEach((el) => {
    el.addEventListener('mouseover', () => {
        el.firstChildElement.style.display = "block";
    })

    el.addEventListener('mouseleave', () => {
        el.firstChildElement.style.display = "none";
    })
})