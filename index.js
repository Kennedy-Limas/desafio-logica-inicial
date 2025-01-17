//Declaração do nome e exp do herói
let nomeHeroi = "Kennedy"
let expHeroi = 7500

//declaração do nivel onde será usadoo na estrutura de repetição para verficar a força
let nivel 

//estrutura de repetição if else
if (expHeroi < 1000) {
    nivel = "Ferro"
} else if (expHeroi >= 1001 &&  expHeroi <= 2000) {
    nivel = "Bronzze"
} else if (expHeroi >= 2001 && expHeroi <= 5000) {
    nivel = "Prata"
} else if (expHeroi >= 5001 &&  expHeroi <= 7000) {
    nivel = "Ouro"
} else if (expHeroi >= 7001 &&  expHeroi <= 8000) {
    nivel = "Platina"
} else if (expHeroi >= 8001 && expHeroi  <= 9000) {
    nivel = "Ascendente"
} else if (expHeroi  >= 9001 && expHeroi <= 10000) {
    nivel = "Imorta"
} else {
    nivel = "Radiante"
}

//exibição da mensagem
console.log("O herói " + nomeHeroi + " está no nível " + nivel)



// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante