let pessoa = {
    nome: 'Jorge',
    idade: 30,
    apresentacao: function() {
        return console.log('Olá, tudo bem?');
    },
    falaNome: function() {
        console.log(`Meu nome é ${this.nome}`);
    },
    aniversario: function() {
        return this.idade += 1;
    }
};

pessoa.falaNome();
console.log(pessoa.idade);
pessoa.aniversario();
console.log(pessoa.idade);