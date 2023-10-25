// variáveis
let resultado = saldoDeVitorias (100, 17)
let nivel = " "


// função
function saldoDeVitorias (numA, numB) {
    let vitorias = numA - numB
    return vitorias
}

// estrutura de decisão
    if (resultado <= 10) {
        nivel = "Ferro";
    } else if (resultado >= 11 && resultado <= 20){
        nivel = "Bronze";
    } else if (resultado >= 21 && resultado <= 50) {
        nivel = "Prata";
    } else if (resultado >= 51 && resultado <= 80) { 
        nivel = "Ouro";
    } else if (resultado >= 81 && resultado <= 90) {
        nivel = "Diamante";
    } else if (resultado >= 91 && resultado <= 100) {
        nivel = "Lendário";
    } else if (resultado >= 100){
        nivel = "Imortal";
    }

// saída
console.log("O herói tem um saldo de vitórias de " + resultado + " e está no nível " + nivel)
