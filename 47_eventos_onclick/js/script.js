// click button e click afetando outros elementos

let btn = document.querySelector('#btn');
let paragrafo = document.createElement('p');
let textParagrafo = document.createTextNode('Texto apresentado após o clique do botão');
paragrafo.appendChild(textParagrafo);

let body = document.getElementsByTagName('body');

btn.addEventListener("click", function() {
    console.log('clicou no botão');
    this.style.backgroundColor = 'green';
    body[0].appendChild(paragrafo);
});

// dois cliques

let title = document.querySelector('#title');
console.log(title);
title.addEventListener("dblclick", function() {
    console.log('Clique duplo');
    let paragrafo1 = document.querySelector('.paragrafo-1');
    paragrafo1.style.display = 'none';
});
