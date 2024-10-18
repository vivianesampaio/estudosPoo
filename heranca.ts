class animal {
    constructor(
        public nome: string,
        public age: number
    ) {
    }
}

class cachorro extends animal {
    constructor(
        
        public peso: number,
        public raca: string,
        public nome: string,
        public age: number
    ) {
       super(nome,age);
    }
}

const cachorro1 = new cachorro(10, 'poddle', 'meg', 13 )

console.log(cachorro1)