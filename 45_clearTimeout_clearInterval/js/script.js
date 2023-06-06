let num = 10;

let myTimeout = setTimeout(function() {
    console.log('O número está com o valor 10');
}, 5000);

num = 20;

if(num != 10) {
    clearTimeout(myTimeout);
    console.log('O número está com valor diferente de 10');
}

let myInterval = setInterval(function() {
    console.log('setInterval...');
}, 500);

setTimeout(function() {
    clearInterval(myInterval);
    console.log('Limpando o setInterval');
}, 3000);


