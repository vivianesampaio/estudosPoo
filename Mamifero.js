"use strict";
class Mamifero {
    constructor(nome) {
        this.especie = "";
        this.nome = "";
        this.peso = 0;
        this.cor = "";
        this.nome = nome;
        this.peso = 60;
    }
}
let meg;
meg = new Mamifero('Meg');
meg.especie = 'Cachorro';
meg.peso = 13;
meg.cor = 'Caramelo';
console.log(meg);
