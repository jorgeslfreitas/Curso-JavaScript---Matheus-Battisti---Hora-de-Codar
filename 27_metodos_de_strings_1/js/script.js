//length - retorna o tamanho de uma string ou array

let nome = 'Jorge';
console.log(nome.length);

//indexOf - utilizado para recuperação inicial de um elemento, dentro de uma sequencia de caracteres.

console.log(nome[4]); // Busca o caracter da variável nome na posição do índice 4 neste exemplo

let frase = 'O rato roeu a roupa do rei de Roma';

console.log(frase.indexOf('Roma')); // indica o ínicio do índice da palavra Roma

//slice - permite "fatiar" uma string ou array e recuperar parte dos seuse elementos; percorre a string ou array para elecionar a faixa de valores determinada por parâmetro

console.log(frase.slice(30, 34)); // através do indexOf foi descoberto o índice que se inicia a palavra Roma e a partir dele podemos recuperar a palavra por completo colocando como parâmetro o índice inicial e final da palavra.

//replace - permite substituir uma sequência de caracteres por outra; percorre toda a string em busca da sequência de caracteres a ser substituída.

console.log(frase.replace('Roma', 'Brasil'));




