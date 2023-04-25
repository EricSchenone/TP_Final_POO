"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tragamonedas = void 0;
const apuesta_1 = require("./apuesta");
class Tragamonedas extends apuesta_1.Apuesta {
    constructor(apuesta, minBet, reels) {
        super(apuesta, minBet);
        this.reels = reels;
    }
}
exports.Tragamonedas = Tragamonedas;
