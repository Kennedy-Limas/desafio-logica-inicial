//------------ Testes e Estudos da aula

// let resultado = soma(5, 10)

// console.log("O Resultado dessa função é " + resultado)

// function soma(numA,numB) {
//     let somatorio = numA + numB
//     return somatorio
// }


// let userName = getFirstName("Kennedy-Anderson-de-Lima")

// console.log("Seja bem vindo " + userName)

// function getFirstName(name) {
//     let firstName = name.split("-")[0]
//     return firstName
// }


//------------ Desafio

function partidasRaqueadas(vitoria, derrota) {
    let saldoDePontos = vitoria - derrota
    let nivelJogador

    if (saldoDePontos < 10) {
        nivelJogador = "Ferro"
    } else if (saldoDePontos >= 11 &&  saldoDePontos <= 20 ) {
        nivelJogador = "Bronze"
    } else if (saldoDePontos >= 21 && saldoDePontos <= 50) {
        nivelJogador = "Prata"
    } else if (saldoDePontos >= 51 &&  saldoDePontos <= 80) {
        nivelJogador = "Ouro"
    } else if (saldoDePontos >= 81 &&  saldoDePontos <= 90) {
        nivelJogador = "Diamante"
    } else if (saldoDePontos >= 91 && saldoDePontos  <= 100) {
        nivelJogador = "Lendário"
    } else {
        nivelJogador = "Imortal"
    }

    console.log(`O Herói tem saldo de ${saldoDePontos} e está no nível ${nivelJogador}`)

}

partidasRaqueadas(52, 8)

//RESUMO fixação 
//Executou-se uma função que tem como parâmetros suas pontuações, dentro do escopo da função, declarou-se uma variavel para armazenar o calculo das pontuações e após isso fez-se um laço de repetição para verificar a pontuação e o nivel do jogador executando uma mensagem de saída no console.log 