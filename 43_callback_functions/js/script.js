function exibir(num) {
    console.log(` operação resultou em ${num}` );
}

function somar(a, b, callback) {
    let op = a + b;
    callback(op);
}

function multiplicar(a, b, cb) {
    let op = a * b;
    cb(op);
}

somar(2, 50, exibir);

multiplicar(3, 10, exibir);
