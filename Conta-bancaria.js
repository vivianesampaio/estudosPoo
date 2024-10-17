"use strict";
class ContaBancaria {
    constructor(nomeTitular, agencia, numero, saldo) {
        this.nomeTitular = nomeTitular;
        this.agencia = agencia;
        this.numero = numero;
        this.saldo = saldo;
    }
    depositar(deposito) {
        this.saldo += deposito;
        console.log('Deposito', deposito.toFixed(2), 'realizado com sucesso!');
    }
    sacar(saque) {
        this.saldo -= saque;
        console.log('Saque', saque.toFixed(2), 'realizado com sucesso! Seu saldo atual é', this.saldo.toFixed(2));
    }
    mostrarSaldo() {
        console.log(this.saldo);
    }
}
let contaViviane = new ContaBancaria('Viviane', 123, 456, 1000);
contaViviane.mostrarSaldo();
contaViviane.depositar(500);
contaViviane.mostrarSaldo();
contaViviane.sacar(100.85);
contaViviane.mostrarSaldo();
contaViviane.depositar(100.85);
contaViviane.mostrarSaldo();
