"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
// Classe Personagem foi otimizada para receber os atributos nome, classe e ataque dentro do construtor
class Personagem {
    constructor(nome, classe, ataque) {
        this.nome = nome;
        this.classe = classe;
        this.ataque = ataque;
    }
}
// Instanciando o objeto Personagem
let eva = new Personagem('Eva', 'bruxa', 10);
// Lib que permite interação com o prompt
let teclado = (0, prompt_sync_1.default)();
let option = 0;
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
            eva.ataque += 5;
            console.log('TREINAR ATAQUE', eva.ataque);
            break;
        case 2:
            console.log(eva);
            break;
        case 3:
            console.log('BUUUUU');
            break;
        case 9:
            console.log('SAIR');
            break;
    }
}
