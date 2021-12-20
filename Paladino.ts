import { Personagem } from "./Personagem";
import { Util } from "./Util";

export class Paladino extends Personagem {
    private _resistencia: number;

    constructor(nome: string) {
        super(nome);
        this._resistencia = Util.randomizar(1, 1_00);
    }

    public status(): string {
        return (
            "\n# Nome: " + this._nome +
            "\n# Ataque: " + Math.round(this._ataque) +
            "\n# Defesa: " + Math.round(this._defesa) +
            "\n# Energia: " + Math.round(this._energia) +
            "\n# Resistência: " + Math.round(this._resistencia)
        );
    }

    public treinarHabilidade() : void {
        this._resistencia += Util.randomizar(5, 10);

        if (this._resistencia > 100){
            this._resistencia = 100;
        }
    }
}