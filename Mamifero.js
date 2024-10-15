"use strict";
class Mamifero {
    constructor(nome, peso, especie, cor) {
        this.nome = nome;
        this.peso = peso;
        this.especie = especie;
        this.cor = cor;
    }
}
let meg = new Mamifero('Meg', 13, 'Cachorro', 'Caramelo');
let guga = new Mamifero('Guga', 13, 'Cachorro', 'Caramelo');
console.log(meg.nome, meg.especie);
