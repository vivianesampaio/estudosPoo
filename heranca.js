"use strict";
class animal {
    constructor(nome, age) {
        this.nome = nome;
        this.age = age;
    }
}
class cachorro extends animal {
    constructor(peso, raca, nome, age) {
        super(nome, age);
        this.peso = peso;
        this.raca = raca;
        this.nome = nome;
        this.age = age;
    }
}
const cachorro1 = new cachorro(10, 'poddle', 'meg', 13);
console.log(cachorro1);
