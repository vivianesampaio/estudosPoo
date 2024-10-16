class ContaBancaria {
    constructor(
        public nomeTitular: string,
        public agencia: number,
        public numero: number,
        public saldo: number
    ) {
    }

    depositar(deposito: number) {
        this.saldo += deposito
        console.log('Deposito ${deposito.tofixed(2)} realizado com sucesso!')
    }

    sacar(saque: number) {
        this.saldo -= saque
    }

    mostrarSaldo() {
        console.log(this.saldo)
    }
}
