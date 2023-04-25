import { iApuesta } from "./iApuesta";

export class Apuesta implements iApuesta {
    protected minBet: number = 0;
    protected apuesta: number;
    protected probabilidad : number;

    public constructor(apuesta: number, minBet : number) {
        this.apuesta = apuesta;
        this.minBet = minBet;
        this.probabilidad = 0;
    }

    public apostar(apuesta: number): void {
        this.apuesta = apuesta;

    }

    public mostrarReglas(): string {
        return ``
    }

    public validarApuesta(apuesta: number): number | string {
        return ``
    }

    public sacarProbabilidad() : void {
    }
}