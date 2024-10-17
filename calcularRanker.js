function calcularNivel(qntVitorias, qntDerrotas) {

    let saldoVitorias = qntVitorias - qntDerrotas;
    let nivel;

    if (isNaN(saldoVitorias)) {
        saldoVitorias = "-Saldo de vitórias não calculado-"
    } else {
        if (saldoVitorias <= 10) {
            nivel = "Ferro"
        } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
            nivel = "Bronze"
        } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
            nivel = "Prata"
        } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
            nivel = "Ouro"
        } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
            nivel = "Diamante"
        } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
            nivel = "Lendário"
        } else if (saldoVitorias >= 101) {
            nivel = "Imortal"
        }
    }

    if (nivel == undefined) {
        nivel = "-Nivél não calculado-"
    }

    document.getElementById("ranker").textContent = `O Herói tem de saldo de ${saldoVitorias} vitórias está no nível de ${nivel}.`;

}


document.getElementById("calculadora").addEventListener("click", function () {

    qntVitorias = parseInt(prompt("Digite a quantidade de vitórias: "))
    qntDerrotas = parseInt(prompt("Digite a quantidade de derrotas: "))


    calcularNivel(qntVitorias, qntDerrotas)
})