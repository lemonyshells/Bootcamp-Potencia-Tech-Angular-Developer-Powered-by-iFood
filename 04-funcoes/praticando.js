/* utilizando objetos 

const gatos = {
	nome: 'Kiara',
	idade: 3,
	sexo: 'fêmea',
	
	descrever: function () {
		console.log(`A ${this.nome} é ${this.sexo} e tem ${this.idade} anos.`)
    }
}

gatos.descrever(); */


/* utilizando classes

class Gato {
	nome;
	idade;
	sexo;

	descrever () {
		console.log(`${this.nome} é ${this.sexo} e tem ${this.idade} anos.`)
    }
}
const kiara = new Gato();
kiara.nome = 'Kiara';
kiara.sexo = 'fêmea';
kiara.idade = 3

const kakashi = new Gato();
kakashi.nome = 'Kakashi';
kakashi.sexo = 'macho';
kakashi.idade = 3

kiara.descrever();
kakashi.descrever(); */

/* utilizando constructor */

class Gato {
	nome;
	idade;
	sexo;

constructor (nome, sexo, idade) {
	this.nome = nome;
	this.sexo = sexo;
	this.idade = idade;
}

	descrever () {
		console.log(`${this.nome} é ${this.sexo} e tem ${this.idade} anos.`)
    }
}

const kiara = new Gato('Kiara', 'fêmea', 2);
const kakashi = new Gato('Kakashi', 'macho', 2);
const naruto = new Gato('Naruto', 'macho', 3);
const pepper = new Gato('Pepper', 'macho', 2);

kiara.descrever();
kakashi.descrever();
naruto.descrever();
pepper.descrever();