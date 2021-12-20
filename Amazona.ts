import { Personagem } from "./Personagem";
import { Util } from "./Util";

export class Amazona extends Personagem {
    private _destreza: number;

    constructor(nome: string) {
        super(nome);
        this._destreza = Util.randomizar(1, 1_00);
    }

    public status(): string {
        return (
            "\n# Nome: " + this._nome +
            "\n# Ataque: " + Math.round(this._ataque) +
            "\n# Defesa: " + Math.round(this._defesa) +
            "\n# Energia: " + Math.round(this._energia) +
            "\n# Destreza: " + Math.round(this._destreza)
        );
    }

    public treinarHabilidade() : void {
        this._destreza += Util.randomizar(5, 10);

        if (this._destreza > 100){
            this._destreza = 100;
        }
    }
}