// splice
let arr = [1, 2, 3, 4, 5];
arr.splice(2, 0, 1000); // 2 = índice, 0 = não remoção do índice 2, 999 = novo contéudo alocado no índice 2
console.log('Método splice: ', arr);

arr.splice(4, 1); // 4 = índice, 1 = remoção do índice 4
console.log(arr);

// indexOf
console.log(arr.indexOf(1000)); //acha o índice do elemento colocado como parâmetro, caso não encontre o retorno é -1.

// join
let arr2 = ['O', 'rato', 'roeu', 'a', 'roupa'];
console.log(arr2.join(' ')); // neste caso está transformando um array e uma string com um separador, usado o "espaço".

// reverse
console.log(arr2.reverse()); // inverte a ordem dos índices do array, ocasionando a inversão dos elementos como efeito também. 