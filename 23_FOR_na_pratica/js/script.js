let lista = ['Banana', 'Maçã', 'Laranja', 'Abacaxi', 'Tangerina'];

let createListUl = document.createElement('ul');

let body = document.getElementsByTagName('body');

body[0].appendChild(createListUl);

let listaUlBody = document.getElementsByTagName('ul');

for (let i = 0; i < lista.length; i++) {
    let liFor = document.createElement('li');
    let textLi = document.createTextNode(lista[i]);
    
    liFor.appendChild(textLi);

    listaUlBody[0].appendChild(liFor);

}



