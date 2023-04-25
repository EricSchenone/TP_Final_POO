"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Apuesta = void 0;
class Apuesta {
    constructor(apuesta, minBet) {
        this.minBet = 0;
        this.apuesta = apuesta;
        this.minBet = minBet;
        this.probabilidad = 0;
    }
    apostar(apuesta) {
        this.apuesta = apuesta;
    }
    mostrarReglas() {
        return ``;
    }
    validarApuesta(apuesta) {
        return ``;
    }
    sacarProbabilidad() {
    }
}
exports.Apuesta = Apuesta;
