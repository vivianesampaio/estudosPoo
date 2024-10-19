class Veiculo {
    constructor(
        public tipo: string, 
        public motor: string, 
        public ano: number,
        public portas: number,
        public cor: string
    ) {
    }
    public andar(): void {
        console.log(`A ${this.tipo} está andando, tem um ${this.motor} e tem ${this.portas} portas e sua cor é ${this.cor}`);
    }
}

class carro extends Veiculo {
    constructor(
        tipo: string, 
        motor: string, 
        ano: number,
        portas: number,
        alo: string
    ) {
        super(tipo, motor, ano, portas, alo);
    }
}

class moto extends Veiculo {
    constructor(
        tipo: string, 
        motor: string, 
        ano: number,
        portas: number,
        cor: string
    ) {
        super(tipo, motor, ano, portas, cor);
    }
}

const carro1 = new carro ('moto', '2.0', 2020, 4,'');
const moto1 = new moto ('moto', '2.0', 2020, 4,'azul');

carro1.andar();
moto1.andar();

console.log(carro1);