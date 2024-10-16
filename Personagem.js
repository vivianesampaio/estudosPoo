"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
// Classe Personagem foi otimizada para receber os atributos nome, classe e ataque dentro do construtor
class Personagem {
    constructor(nome, classe, ataque, vida) {
        this.nome = nome;
        this.classe = classe;
        this.ataque = ataque;
        this.vida = vida;
    }
}
// Instanciando o objeto Personagem
let eva = new Personagem('Eva', 'bruxa', 10, 100);
// Lib que permite interação com o prompt
let teclado = (0, prompt_sync_1.default)();
let option = 0;
// Laço de repetição criado para interação com o usuário, onde cada número digitado representa uma ação do personagem
while (option !== 9) {
    console.log('+==========  Personagem  ==========+');
    console.log('| 1 - TREINAR ATAQUE               |');
    console.log('| 2 - IMPRIMIR PERSONAGEM:         |');
    console.log('| 3 - ATACAR:                      |');
    console.log('| 4 - APANHAR:                     |');
    console.log('| 9 - SAIR                         |');
    console.log('+==================================+');
    option = +teclado('digite a opcao: ');
    switch (option) {
        case 1:
            eva.ataque += 5;
            console.log(eva.nome, 'diz: IAAAAAAAAAAA, toma essa infeliz', eva.ataque);
            break;
        case 2:
            console.log(eva);
            break;
        case 3:
            console.log('BUUUUU');
            break;
        case 4:
            eva.vida -= 10;
            console.log('Aiiiiiii, essa doeu', eva.vida);
            if (eva.vida <= 0) {
                console.log('EVA MORREU');
                option = 9;
            }
            break;
        case 9:
            console.log('Tchau');
            break;
    }
}
