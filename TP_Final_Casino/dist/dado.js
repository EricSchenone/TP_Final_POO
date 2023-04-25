"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dados = void 0;
const apuesta_1 = require("./apuesta");
const readline_sync_1 = __importDefault(require("readline-sync"));
class Dados extends apuesta_1.Apuesta {
    constructor(apuesta, minBet) {
        super(apuesta, minBet);
    }
    lanzarDados() {
        const dado1 = Math.floor(Math.random() * 6 + 1);
        const dado2 = Math.floor(Math.random() * 6 + 1);
        const resultado = dado1 + dado2;
        if ((resultado) === 7 || (resultado) === 11) {
            return `Dado 1: ${dado1}\nDado 2: ${dado2}\nSu tirada dió ${resultado}.\n**¡¡ Usted ganó $: ${(this.apuesta * 2.5)} !!**`;
        }
        else if ((resultado) === 2 || (resultado) === 3 || (resultado) === 12) {
            return `Dado 1: ${dado1}\nDado 2: ${dado2}\nSu tirada dió ${resultado}.\n**¡¡ Usted perdió lo apostado !!**`;
        }
        else {
            console.log(`Dado 1: ${dado1}\nDado 2: ${dado2}\nSu tirada dio: ${resultado}, puede volver a tirar para seguir jugando.`);
            const continuar = readline_sync_1.default.keyInYNStrict("Desea volver a tirar los dados?");
            return this.lanzarDados();
        }
        ;
    }
    probabilidadDeGanar() {
        const probabilidad = 2 / 10 * 100;
        console.log(`Tus probabilidades de ganar son del ${probabilidad} %. `);
    }
    mostrarReglas() {
        const reglasDado = `                    **//** BiEnVeNiDoS a DaDoS **//**

                                       ** REGLAS DE JUEGO **
        ------------------------------------------------------------------------------------------
         1- El juego comienza con el lanzamiento de un "tiro de salida" por parte del jugador 
          que hace la apuesta inicial (llamado "tirador").
         2- El tirador debe apostar el mínimo establecido para el juego.
         3- El tirador lanza dos dados. Si el resultado es 7 o 11, el tirador gana automáticamente.
          Si el resultado es 2, 3 o 12, el tirador pierde automáticamente.
         ------------------------------------------------------------------------------------------
         ------------------------------------------------------------------------------------------
         
         APUESTA MINIMA: $150.-
         Tiro ganador paga x2.5
         `;
        return reglasDado;
    }
    validarApuesta(apuesta) {
        if (apuesta >= this.minBet) {
            console.log(`Usted apuesta: $ ${apuesta}.`);
            return this.lanzarDados();
        }
        else {
            return `Debe ingresar una apuesta mayor a $${this.minBet}`;
        }
        ;
    }
    sacarProbabilidad() {
        this.probabilidad = 2 / 9 * 100;
        return `La probabilidad de ganar este juego es del ${this.probabilidad} %`;
    }
}
exports.Dados = Dados;
