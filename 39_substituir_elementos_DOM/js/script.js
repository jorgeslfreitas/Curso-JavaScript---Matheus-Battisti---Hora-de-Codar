// Substituir elementos dentro da árvore DOM, neste exemplo será substituído uma tag h2 por uma tag h3.

// Criando elemento com a tag h3 e o texto contido dentro da tag.
let titleH3 = document.createElement('h3');
let textH3 = document.createTextNode('Texto do elemento criado (<h3>).')
titleH3.appendChild(textH3);
console.log(titleH3);

// Substituição 

let titleH2 = document.querySelector('#title-h2');

let parentH2 = titleH2.parentNode; // parentNode relaciona o elemento filho com o pai

parentH2.replaceChild(titleH3, titleH2); // replace para substituição



