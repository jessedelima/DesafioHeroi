class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "usou um ataque indefinido";
        }

        return `o ${this.tipo} atacou usando ${ataque}`;
    }
}

// Exemplo de uso da classe Heroi
const heroi1 = new Heroi("Gandalf", 1000, "mago");
console.log(heroi1.atacar()); // Saída: "o mago atacou usando magia"

const heroi2 = new Heroi("Aragorn", 35, "guerreiro");
console.log(heroi2.atacar()); // Saída: "o guerreiro atacou usando espada"

const heroi3 = new Heroi("Bruce Lee", 32, "monge");
console.log(heroi3.atacar()); // Saída: "o monge atacou usando artes marciais"

const heroi4 = new Heroi("Hanzo", 28, "ninja");
console.log(heroi4.atacar()); // Saída: "o ninja atacou usando shuriken"
