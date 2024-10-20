class EncapContaBancaria {
    private saldo: number;

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }    
    /**
     * Método para depositar dinheiro na conta.
     * @param {number} valor - O valor a ser depositado.
     */

    public depositar(deposito: number) {
        this.saldo += deposito;
        console.log('Deposito', deposito.toFixed(2), 'realizado com sucesso! Seu saldo atual é', this.saldo.toFixed(2));
    }

    public sacar(saque: number) {
        if (this.saldo < saque) {
            console.log('Saldo insuficiente!');
            return;
        }

        if (saque <= 0) {
            console.log('Saque inválido!');
            return;
        }

        this.saldo -= saque;
        console.log('Saque', saque.toFixed(2), 'realizado com sucesso! Seu saldo atual é', this.saldo.toFixed(2));
    }

    public mostrarSaldo() {
        console.log(this.saldo.toFixed(2));
    }
}

const contaViviane2 = new EncapContaBancaria(1200);

contaViviane2.sacar(20.555555);

contaViviane2.mostrarSaldo();