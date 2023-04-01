// a forma mais simples de atribuir um objeto é através do {}
// funcao dentro de objeto é chamado de metodo

/*
const dados = {
    nome: 'Yandra',
    idade: 29,
    
    descrever: function () {
        console.log('Meu nome é ${this.nome} e minha idade é ${this.idade}');
    }
};

dados.descrever();
*/

// criando classes = útil para dinamizar o código ; quando é especifico, é uma instância

class Pessoa {
    nome;
    idade;
    anoDeNascimento;

// definicao de como tem que ser um objeto

    constructor (nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }
    
    descrever () {
        console.log(`Meu nome é ${this.nome} e minha idade é {this.idade}`);
    }
}

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} têm a mesma idade`);
    }
}

const yandra = new Pessoa('Yandra', 29);
const jair = new Pessoa('Jair', 28);

compararPessoas(yandra, jair)
