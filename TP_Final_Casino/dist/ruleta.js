"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ruleta = void 0;
const apuesta_1 = require("./apuesta");
class Ruleta extends apuesta_1.Apuesta {
    constructor(apuesta, minBet) {
        super(apuesta, minBet);
    }
    girarRuleta() {
        const resultado = Math.floor(Math.random() * 37);
        return resultado;
    }
    mostrarReglas() {
        const reglasRuleta = `
                                  **//** BiEnVeNiDoS a RuLeTa **//**

                                      ** REGLAS DE LA RULETA **
        ------------------------------------------------------------------------------------------                              
        1- La mesa de la ruleta tiene una rueda con 37 números en donde el jugador debe apostar
        2- El jugador debe apostar a un número y luego apretar “jugar”.
        3- Cuando se detiene  la ruleta sale el número ganador.
        4- Si la bola cae en el numero cero (o doble cero, en algunas variantes), todas las apuestas pierden, a menos que el jugador haya apostado específicamente por el cero.
        
        APUESTA MINIMA = $ 100
        El numero ganador duplicara la apuesta incial.
        
        ------------------------------------------------------------------------------------------
        ------------------------------------------------------------------------------------------`;
        return reglasRuleta;
    }
    validarApuesta(apuesta) {
        if (apuesta >= this.minBet) {
            console.log(`Usted apuesta: $${apuesta}`);
            return this.girarRuleta();
        }
        else {
            return `Debe ingresar una apuesta mayor a $${this.minBet}`;
        }
    }
    sacarProbabilidad() {
        const probabilidad = 1 / 36 * 100;
        return `La probabilidad de ganar este juego es del ${probabilidad} %`;
    }
}
exports.Ruleta = Ruleta;
