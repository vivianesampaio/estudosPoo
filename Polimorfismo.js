"use strict";
class Veiculo {
    constructor(tipo, motor, ano, portas, cor) {
        this.tipo = tipo;
        this.motor = motor;
        this.ano = ano;
        this.portas = portas;
        this.cor = cor;
    }
    andar() {
        console.log(`A ${this.tipo} está andando, tem um ${this.motor} e tem ${this.portas} portas e sua cor é ${this.cor}`);
    }
}
class carro extends Veiculo {
    constructor(tipo, motor, ano, portas, alo) {
        super(tipo, motor, ano, portas, alo);
    }
}
class moto extends Veiculo {
    constructor(tipo, motor, ano, portas, cor) {
        super(tipo, motor, ano, portas, cor);
    }
}
const carro1 = new carro('moto', '2.0', 2020, 4, '');
const moto1 = new moto('moto', '2.0', 2020, 4, 'azul');
carro1.andar();
moto1.andar();
console.log(carro1);
