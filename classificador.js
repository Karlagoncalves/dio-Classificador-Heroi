document.getElementById("classificar").addEventListener("click", function(){

let  nome = prompt("Digite o nome do herói: ")
let  xp = parseInt(prompt("Digite a quantidade de XP do herói: "))
let xpNivel;

if (xp < 1000) {
   xpNivel = "Ferro"
} else if ( xp >= 1001 && xp <= 2000) {
    xpNivel = "Bronze"
}else if ( xp >= 2001 && xp <= 5000) {
    xpNivel = "Prata"
}else if (xp >= 5001 && xp <= 7000) {
    xpNivel = "Ouro"
}else if ( xp >= 7001 && xp <= 8000) {
    xpNivel = "Platina"
}else if ( xp >= 8001 && xp <= 9000) {
    xpNivel = "Ascendente"
}else if (xp >= 9001 && xp <= 10000) {
    xpNivel = "Imortal"
}else if(xp >= 10001){
    xpNivel = "Radiante"
}

if(nome == null || (nome.length == 0)){
    nome = "-Nome não informado-"
}

if(xpNivel == undefined){
    xpNivel = "-Quantidade de XP não informada-"
}

document.getElementById("resultado").textContent = `O Herói de nome ${nome} está no nível de ${xpNivel}.`;

})

