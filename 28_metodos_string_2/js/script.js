let nome = 'Jorge';
let sobrenome = 'freitas';

// toLowerCase - deixa o texto ou palavra em caixa baixa
// toUpperCase - deixa o texto ou palavra em caixa alta
console.log(nome.toLowerCase(), sobrenome.toUpperCase());

//trim - remove os espaços desnecessários do ínicio e fim de uma string
let palavra = '         coragem       ';
console.log(palavra);
console.log(palavra.trim());

//split - permite dividir/ separar strings e retornar um array

let linguagens = 'PHP JS TS Java C#';
console.log(linguagens.split(' ')); // retornou um array com o separador de espaço

let frameworks = 'Angular,React,VueJS,Svelte,NextJS';
console.log(frameworks.split(',')); // retornou um array com o separador de vírgula

//lastIndexOf - 

let frase = 'Gosto de JavaScript. Está linguagem JavaScript me permite usá-la no front e no back de uma aplicação';

console.log(frase.indexOf('JavaScript')); // retornou o índice da primeira palavra achada
console.log(frase.lastIndexOf('JavaScript')); // retornou o índice da última palavra achada