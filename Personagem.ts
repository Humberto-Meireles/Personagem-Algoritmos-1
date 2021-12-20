import { Util } from "./Util";

export abstract class Personagem {
    protected _nome: string;
    protected _ataque: number;
    protected _defesa: number;
    protected _energia: number;

    constructor(nome: string) {
        this._nome = nome;
        this._ataque = Util.randomizar(1, 1_00);
        this._defesa = Util.randomizar(1, 1_00);
        this._energia = 5;
    }

    public get nome(): string {
        return this._nome;
    }

    public abstract status(): string;

    public abstract treinarHabilidade(): void;

    public isDead(): boolean {    
        return Math.round(this._energia) <= 0;
    }

    public treinarAtaque() : void {
        this._ataque += Util.randomizar(5, 10);
        this._energia -= Util.randomizar(5, 10);

        if (this._ataque > 100){
            this._ataque = 100;
        }
    }

    public treinarDefesa(): void {
        this._defesa += Util.randomizar(5, 10);
        this._energia -= Util.randomizar(5, 10);

        if (this._defesa > 100) {
            this._defesa = 100;
        }
    }

    public descansar(tempo: number) : void {
        this._energia += tempo * Util.randomizar(1, 10);

        if (this._energia > 100) {
            this._energia = 100;
        }
    }

    public batalhar() : number {
        let dano: number = Util.randomizar(1, 10);

        this._energia -= dano;

        return dano;
    }
}