class Mamifero {
    especie: string = "";
    nome: string = "";
    peso: number = 0;
    cor: string = "";

    constructor(nome: string){
        this.nome = nome;
        this.peso = 60;
    }
}

let meg: Mamifero;
meg = new Mamifero('Meg')
meg.especie = 'Cachorro'
meg.peso = 13
meg.cor = 'Caramelo';
console.log(meg)