class Pessoa {
    constructor(nome, anoDeNascimento, profissao){
        this.nome = nome;
        this.anoDeNascimento = anoDeNascimento;
        this.profissao = profissao;
    };
    ola(){
        console.log('Olá, meu nome é ' + this.nome);
    };
    calculaIdade(){
        return new Date().getFullYear() - this.anoDeNascimento;
    };
};

class Estudante extends Pessoa {
    constructor(nome, anoDeNascimento, profissao, matricula){
        super(nome, anoDeNascimento, profissao);
        this.matricula = matricula;
    };
};

const pessoa1 = new Pessoa('Gi', 1990, 'Estudante');
pessoa1.ola();
console.log('Eu tenho ' + pessoa1.calculaIdade() + ' anos');

const aluno1 = new Estudante('Maitê', 2017, 'Estudante', 41007);
console.log(aluno1);