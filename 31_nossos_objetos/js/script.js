let pessoa = {
    nome: 'Jorge',
    idade: 30,
    apresentacao: ()=> {
        return console.log('Olá, tudo bem?');
    },
    soma: (a, b)=> {
        return  a + b;
    },
};

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.apresentacao());
let soma = pessoa.soma(4, 10);
console.log(soma);