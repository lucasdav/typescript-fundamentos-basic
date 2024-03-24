interface TemNome {
    nome: string;
}

class Pessoa2 implements TemNome {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }
}

class CaixaNome<T extends TemNome> {
    conteudo: T;

    constructor(conteudo: T) {
        this.conteudo = conteudo;
    }
}

let pessoa4 = new Pessoa2("João");
let caixa = new CaixaNome(pessoa4);

console.log(caixa.conteudo.nome)