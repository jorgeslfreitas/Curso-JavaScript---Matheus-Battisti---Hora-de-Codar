//parse.Float - converte uma string em um valor real, número com ponto flutuante

console.log(parseFloat('10.999'));
console.log(Number.parseFloat('12.9999'));

// parseInt - converte uma string em um valor inteiro, número com valor exato, sem casas decimais

console.log(parseInt('10'));
console.log(parseInt('17.90'));

// toFixed() - define quantas casas decimais serão apresentadas após o ponto

console.log(10.10303993.toFixed(4));

//isNaN - verifica se é um número ou não e retorna um valor booleano

console.log(isNaN('teste'));
console.log(isNaN('10')); //converte a string para number.
console.log(isNaN(10));

// MAX_VALUE e MIN_VALUE

console.log(Number.MAX_VALUE); // retorna o maior valor possível de JS, acima disso retorna infinity
console.log(Number.MIN_VALUE); // retorna o menor valor possível de JS, abaixo disso retorna -infinity

console.log(5.7976931348623157e+308) // retorna infinity