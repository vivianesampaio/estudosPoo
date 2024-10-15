class Mamifero {
    constructor(
        public nome: string,
        public peso: number,
        public especie: string,
        public cor: string
    ){}
}

let meg = new Mamifero('Meg', 13, 'Cachorro', 'Caramelo');
let guga = new Mamifero('Guga', 13, 'Cachorro', 'Caramelo');


console.log(meg.nome,meg.especie)
