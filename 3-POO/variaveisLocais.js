function Pessoa(){
    let nome = ['Rommel','Cavalher'];
    let anoDeNascimento = 1990;
    let profissao = 'Estudante';
    this.calculaIdade = function(){
        return new Date().getFullYear()- anoDeNascimento;
    }
};

const pessoa = new Pessoa();
console.log(pessoa);

/* o único atributo/método que não ficou restrito ao escopo da função foi a função calculaIdade */