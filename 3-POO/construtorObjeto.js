function Pessoa(nome, anoDeNascimento, profissao) {
    this.nome = nome;
    this.anoDeNascimento = anoDeNascimento;
    this.profissao = profissao;
    this.calculaIdade = function() {
        return new Date().getUTCFullYear() - this.anoDeNascimento;
    };
};

const pessoa1 = new Pessoa('Maria', 2016, 'Estudante');
console.log(pessoa1)
console.log(pessoa1.calculaIdade())

const pessoa2 = new Pessoa('João', 1987, 'Astronauta');
console.log(pessoa2)
console.log(pessoa2.calculaIdade())
