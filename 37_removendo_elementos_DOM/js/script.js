// removendo elemento direto
let subtitle = document.querySelector('.subtitle');
subtitle.remove();


// removendo elemento filho 
let divContainer = document.querySelector('#container');
let paragrafo = document.querySelector('#paragrafo');

divContainer.removeChild(paragrafo);
