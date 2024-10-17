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
        console.log('Deposito' , deposito.toFixed(2), 'realizado com sucesso!')
    }

    sacar(saque: number) {
        this.saldo -= saque
        console.log('Saque', saque.toFixed(2), 'realizado com sucesso! Seu saldo atual é', this.saldo.toFixed(2))
    }

    mostrarSaldo() {
        console.log(this.saldo)
    }
}

let contaViviane = new ContaBancaria('Viviane', 123, 456, 1000)

contaViviane.mostrarSaldo()

contaViviane.depositar(500)

contaViviane.mostrarSaldo()

contaViviane.sacar(100.85)

contaViviane.mostrarSaldo()

contaViviane.depositar(100.85)

contaViviane.mostrarSaldo()