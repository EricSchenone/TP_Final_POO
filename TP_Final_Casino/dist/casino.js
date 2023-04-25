"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Casino = void 0;
class Casino {
    constructor(nombre, dados, ruleta, slotLetras, slotNumeros) {
        this.nombre = nombre;
        this.dados = dados;
        this.ruleta = ruleta;
        this.slotLetras = slotLetras;
        this.slotNumeros = slotNumeros;
    }
    mostrarSaludoInicial(nombre) {
        this.nombre = nombre;
        const saludo = `Bienvenidos a ${nombre}, donde te robamos toda la plata...`;
        return saludo;
    }
    getNombre() {
        return this.nombre;
    }
}
exports.Casino = Casino;
