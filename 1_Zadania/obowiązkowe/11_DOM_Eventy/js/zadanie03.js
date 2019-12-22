document.addEventListener('DOMContentLoaded', () => {
    const button1 = document.querySelector('#button1'),
          button2 = document.querySelector('#button2'),
          button3 = document.querySelector('#button3');
    
    function changeCounter () {
        const currentText = this.nextElementSibling.children[0].innerHTML * 1;
        this.nextElementSibling.children[0].innerHTML = currentText + 1;
    }

    button1.addEventListener('click', changeCounter);
    button2.addEventListener('click', changeCounter);
    button3.addEventListener('click', changeCounter);
})