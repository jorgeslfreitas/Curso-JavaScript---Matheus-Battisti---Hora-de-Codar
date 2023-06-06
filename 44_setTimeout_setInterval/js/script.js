// setTimeout
console.log('Antes do setTimeout');

setTimeout(function() {
    console.log('setTimeout...');
}, 5000);

console.log('Depois do setTimeout');

setInterval(function() {
    console.log('setInterval...');
}, 3000);

