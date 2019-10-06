function countHello(number) {
    var number2 = 1;
    const interval = setInterval(function(){
        console.log('Hello ', number2++);
        if(number2 === number+1) clearInterval(interval);
    }, 1000);
}

countHello(10);