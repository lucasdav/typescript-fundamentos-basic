//injeção de dependencia

class Interruptor {
    ligar() {
        console.log('Lâmpada ligada');
    }
}

class Lampada {
    private interruptor: Interruptor;

    constructor(interruptor: Interruptor) {
        this.interruptor = interruptor;
    }

    acionar() {
        this.interruptor.ligar();
    }
}

const interruptor = new Interruptor();
const lampada = new Lampada(interruptor);
lampada.acionar();