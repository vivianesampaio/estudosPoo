import prompt from "prompt-sync";

// Classe Personagem foi otimizada para receber os atributos nome, classe e ataque dentro do construtor
class Personagem {
    constructor(
        public nome: string,
        public classe: string,
        public ataque: number
    ) { }
}

// Instanciando o objeto Personagem
let eva: Personagem = new Personagem('Eva', 'bruxa', 10);

// Lib que permite interação com o prompt
let teclado = prompt();
let option: number = 0;


// Laço de repetição criado para interação com o usuário, onde cada número digitado representa uma ação do personagem
while (option !== 9) {
    console.log('+==========  Personagem  ==========+');
    console.log('| 1 - TREINAR ATAQUE               |');
    console.log('| 2 - IMPRIMIR PERSONAGEM:         |');
    console.log('| 3 - ATACAR:                      |');
    console.log('| 9 - SAIR                         |');
    console.log('+==================================+');
    option = +teclado('digite a opcao: ');
    
    switch (option) {
        case 1: 
            eva.ataque += 5
            console.log('TREINAR ATAQUE', eva.ataque);
    
            break;
        case 2: console.log(eva);
    
            break;
        case 3: console.log('BUUUUU');
    
            break;
        case 9: console.log('SAIR');
    
            break;
    }
}
