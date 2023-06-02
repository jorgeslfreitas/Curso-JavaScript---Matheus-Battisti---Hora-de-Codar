// inserindo elemento dentro de outro elemento
let elDiv = document.createElement('div');
elDiv.id = 'div-criada';
console.log(elDiv);

let divContainer = document.querySelector('#container');

divContainer.appendChild(elDiv)

// inserindo elemento com insertBefore, inseri antes da referência passada como parâmetro

let elDiv2 = document.createElement('div');
elDiv2.classList = 'div-before';
console.log(elDiv2);
let el = document.querySelector('#container #div-criada')
console.log(el);

divContainer.insertBefore(elDiv2, el);

