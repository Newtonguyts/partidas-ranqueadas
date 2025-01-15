// Calculadora de partidas ranqueadas



function calcPartidasRank(qtdVitorias, qtdDerrotas){
    let resultadoRank = qtdVitorias - qtdDerrotas
    let nivelDoHeroi

    switch (true) {
        case (qtdVitorias <= 10):
            nivelDoHeroi = "Ferro"
            break

        case (qtdVitorias >= 11 && qtdVitorias <= 20):
            nivelDoHeroi = "Bronze"
            break
        
         case (qtdVitorias >= 21 && qtdVitorias <= 50):
            nivelDoHeroi = "Prata"
            break

        case (qtdVitorias >= 51 && qtdVitorias <= 80):
            nivelDoHeroi = "Ouro"
            break

        case (qtdVitorias >= 81 && qtdVitorias <= 90):
            nivelDoHeroi = "Diamante"
            break

        case (qtdVitorias >= 91 && qtdVitorias <= 100):
            nivelDoHeroi = "Lendário"
            break

        case (qtdVitorias > 100):
            nivelDoHeroi = "Imortal"
            break

      default: 
            nivel = "Nível Desconhecido!"  
            break
    }  

    return `O Herói tem de saldo de ${resultadoRank} vitórias e está no nível ${nivelDoHeroi}`
}

console.log(calcPartidasRank(500, 90))