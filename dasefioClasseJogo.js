class gameClass{

        mago = "magia"
        guerreiro = "espada"
        monge = "artes marciais"
        ninja = "shuriken"

    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = {
            mago : "mago",
            guerreiro : "guerreiro",
            monge : "monge",
            ninja : "ninja",
        }
    }

    resultOfTheAttack(){

        console.log(`o ${this.tipo.mago} atacou usando ${this.mago}`);
        console.log(`o ${this.tipo.guerreiro} atacou usando ${this.guerreiro}`);
        console.log(`o ${this.tipo.monge} atacou usando ${this.monge}`);
        console.log(`o ${this.tipo.ninja} atacou usando ${this.ninja}`);
    }
    
}

let attackHero = new gameClass("Kennedy", 28 , "ninja")

attackHero.resultOfTheAttack()