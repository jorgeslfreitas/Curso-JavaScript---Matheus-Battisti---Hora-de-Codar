// inserindo elementos dentro do Body
let paragrafo = document.createElement('p'); // criação da tag <p>
let texto = document.createTextNode('Texto criando para ser inserido no parágrafo criado com JS'); // texto para inserir dentro da tag <p>
paragrafo.appendChild(texto); // inserindo texto dentro da tag
console.log(paragrafo);

let body = document.querySelector('body');
body.appendChild(paragrafo); // inserindo elemento criando com tag e texto dentro do corpo do HTML

// inserindo elemento dentro de uma div#container
let span = document.createElement('span');
let textoSpan = document.createTextNode('Texto criado com JS para ser inserido dentro do span que está dentro de uma div container');
span.appendChild(textoSpan);
console.log(span);

let divContainer = document.querySelector('#container');
divContainer.appendChild(span);