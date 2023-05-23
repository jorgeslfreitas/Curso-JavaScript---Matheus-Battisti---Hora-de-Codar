var x = 10;
var y = 5;

console.log(x, y);

function escopoLocal() {
    var x = 6;
    console.log(x);
}

escopoLocal();

function escopoLocal2() {
    var x = 500;
    console.log(x);
}

escopoLocal2();

