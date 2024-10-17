class Heroi {
    constructor(nome, tipo, qntXP) {
        this.nome = nome
        this.tipo = tipo
        this.qntXP = qntXP

    }


    atacar() {
        let ataque

        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'magia'
                break;
            case 'guerreiro':
                ataque = 'espada'
                break;
            case 'monge':
                ataque = 'artes marciais'
                break;
            case 'ninja':
                ataque = 'shuriken'
                break;
            default:
                ataque = 'tipo desconhecido'
                break;
        }

        return `O Herói ${this.nome} com o tipo ${this.tipo} atacou usando ${ataque} e tem ${this.qntXP} XP.`
    }
}


export default Heroi