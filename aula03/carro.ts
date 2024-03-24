class MeuCarro implements Carro {
    marca: string;
    modelo: string;
    ano: number;
  
    constructor(marca: string, modelo: string, ano: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
  
    ligar() {
        console.log(`Ligando ${this.modelo}`);
    }
  }