"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlotLetras = void 0;
const tragamoneda_1 = require("./tragamoneda");
class SlotLetras extends tragamoneda_1.Tragamonedas {
    constructor(apuesta, minBet, reels) {
        super(apuesta, minBet, reels);
        this.letras = ["A", "B", "C"];
    }
    girarReels() {
        let result = [];
        for (let i = 0; i < this.reels; i++) {
            const randomIndex = Math.floor(Math.random() * this.letras.length);
            result.push(this.letras[randomIndex]);
        }
        console.log(result);
        const sorteoString = result.join('');
        let premio;
        let mensaje;
        switch (sorteoString) {
            case 'AAA':
                premio = this.apuesta * 10;
                mensaje = `Has ganado $ ${premio}.`;
                break;
            case 'BBB':
                premio = this.apuesta * 7.5;
                mensaje = `Has ganado $ ${premio}.`;
                break;
            case 'CCC':
                premio = this.apuesta * 5;
                mensaje = `Has ganado $ ${premio}.`;
                break;
            case 'AAB':
                premio = this.apuesta * 2.5;
                mensaje = `Has ganado $ ${premio}.`;
                break;
            case 'AAC':
                premio = this.apuesta * 1;
                mensaje = `Has ganado $ ${premio}.`;
                break;
            case 'BBA':
                premio = this.apuesta * 0.5;
                mensaje = `Has ganado $ ${premio}.`;
                break;
            case 'BBC':
                premio = this.apuesta * 0.25;
                mensaje = `Has ganado $ ${premio}.`;
                break;
            default:
                mensaje = `Lo siento, has perdido tu apuesta...!!!.`;
                break;
        }
        return mensaje;
    }
    mostrarReglas() {
        const reglasSlot = `                    **//** BiEnVeNiDoS a SlOt LeTrAs **//**
        
                                ** REGLAS DEL TRAGAMONEDAS **
        ------------------------------------------------------------------------------------------
        1- El tragamonedas Letras  tiene 3 reels con las opciones “A”, “B”, “C”.
        2- El jugador realizar su apuesta.
        3- El jugador presiona "jugar" para hacer girar los reel.
        4- Cuando los reel se detienen, los símbolos que aparecen en la línea de pago determinan 
        si el jugador ha ganado o no.
        5- Si el jugador obtiene una combinación ganadora, “Gana”
        6- Si el jugador no obtiene una combinación ganadora, pierde su apuesta.

        APUESTA MINIMA = $ 75

        LINEAS GANADORAS:
                "AAA" = x10
                "BBB" = x7.5
                "CCC" = x5
                "AAB" = x2.5
                "AAC" = x1
                "BBA" = x0.5
                "BBC" = x0.25

        ------------------------------------------------------------------------------------------
        ------------------------------------------------------------------------------------------`;
        return reglasSlot;
    }
    validarApuesta(apuesta) {
        if (apuesta >= this.minBet) {
            console.log(`Usted apuesta: $${apuesta}.`);
            return this.girarReels();
        }
        else {
            return `Debe ingresar una apuesta igual o mayor a ${this.minBet} `;
        }
        ;
    }
    sacarProbabilidad() {
        this.probabilidad = 7 / 27 * 100;
        console.log(`La probabilidad de ganar este juego es del ${this.probabilidad} %`);
    }
}
exports.SlotLetras = SlotLetras;
