let array = [1, 2, 3, 4, 5];

// length - retorna o tamanho do array com valor numérico
console.log('Tamanho do array - length: ', array.length);

// push - adiciona um elemento no final do array
array.push(6);
console.log('Adicionado elemento no fim - push: ', array);

// pop - remove o último elemento do array
array.push('teste final');
console.log(array);
array.pop();
console.log('Removido o último elemento - pop: ', array);

// unshift - adiciona um elemento no ínicio do array

array.unshift('teste inicio');
console.log('Adicionado elemento no ínicio - unshift: ', array);

// shift - remove o primeiro elemento do array
array.shift();
console.log('Removido primeiro elemento - shift: ', array)

// isArray - verifica se o dado acessado é um array, retorna true ou false
console.log(Array.isArray(5));
console.log(Array.isArray(array));

// array.length - 1 - para acessar o último elemento do array
console.log(array)
console.log(array[array.length - 1]);
