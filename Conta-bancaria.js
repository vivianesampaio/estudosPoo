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
        console.log('Deposito ${deposito.tofixed(2)} realizado com sucesso!');
    }
    sacar(saque) {
        this.saldo -= saque;
    }
    mostrarSaldo() {
        console.log(this.saldo);
    }
}
