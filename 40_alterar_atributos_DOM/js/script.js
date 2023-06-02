// Adicionando atributos nos elementos
let subtitle = document.querySelector('#subtitle-h2');
subtitle.setAttribute('class', 'class-subtitle-h2');
console.log(subtitle);

// Removendo atributos nos elementos
let lista = document.querySelector('.listaItens');
lista.removeAttribute('class');
console.log(lista);