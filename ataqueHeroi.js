import Heroi from "./dadosHeroi.js";


document.getElementById("ataque").addEventListener("click", function(){

    let nome = prompt("Digite o nome do herói: ")
    let tipo = prompt("Digite o tipo do herói: ")
    let qntXP = parseInt(prompt("Digite a quantidade de XP herói: "))
    
    let heroi = new Heroi(nome, tipo, qntXP)

    let resultadoAtaque = heroi.atacar();

    document.getElementById("ataqueResultado").textContent = resultadoAtaque;
    
    })
    
    