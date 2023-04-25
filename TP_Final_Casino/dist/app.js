"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const casino_1 = require("./casino");
const dado_1 = require("./dado");
const ruleta_1 = require("./ruleta");
const slotLetras_1 = require("./slotLetras");
const slotNumeros_1 = require("./slotNumeros");
const readline_sync_1 = __importDefault(require("readline-sync"));
const slotNumeros = new slotNumeros_1.SlotNumeros(0, 200, 4);
const slotLetras = new slotLetras_1.SlotLetras(0, 75, 3);
const ruleta = new ruleta_1.Ruleta(0, 100);
const dados = new dado_1.Dados(0, 150);
const casinoLasFlores = new casino_1.Casino("Gaming House Casino", dados, ruleta, slotLetras, slotNumeros);
console.log(casinoLasFlores.mostrarSaludoInicial(casinoLasFlores.getNombre()));
const nombreUsuario = readline_sync_1.default.question('Ingrese su nombre:  ');
const edadUsuario = readline_sync_1.default.question('Ingrese su edad :    ');
if (edadUsuario >= "18") {
    console.log(` Hola ${nombreUsuario}, vamos a jugarrrr !!! `);
    let volver = true;
    while (volver) {
        const juegos = ["Dados", "Ruleta", "SlotLetras", "SlotNumeros"];
        const index = readline_sync_1.default.keyInSelect(juegos, 'Elige el que deseas jugar:');
        if (index === -1) {
            console.log("Gracias por visitar nuestro casino...!!!");
            volver = false;
            break;
        }
        switch (juegos[index]) {
            case "Dados": {
                console.log(dados.mostrarReglas());
                dados.probabilidadDeGanar();
                const valor = readline_sync_1.default.questionFloat("Ingrese su apuesta:");
                dados.apostar(valor);
                const resultado = dados.validarApuesta(valor);
                console.log(`
        *****************
        ${resultado}
        *****************`);
                const continuar = readline_sync_1.default.keyInYN([`Desea seguir jugando?`]);
                if (!continuar) {
                    console.log(`Gracias por apostar en ${casinoLasFlores.getNombre()}...!!!`);
                    volver = false;
                }
                break;
            }
            case "Ruleta": {
                console.log(ruleta.mostrarReglas());
                ruleta.sacarProbabilidad();
                const valor = readline_sync_1.default.questionFloat("Ingrese su apuesta:");
                const numeroApuesta = readline_sync_1.default.questionFloat("Ingrese el numero al que quiere apostar:");
                if (numeroApuesta > 36) {
                    console.log("Debe seleccionar un numero entre 0 y 36");
                    const numeroApuesta = readline_sync_1.default.questionFloat("Ingrese el numero al que quiere apostar:");
                }
                ruleta.apostar(valor);
                const resultado = ruleta.validarApuesta(valor);
                console.log(`
        ****************
              ${resultado}
        ****************`);
                if (numeroApuesta == resultado) {
                    console.log(`**¡¡ Ha ganado ${(valor * 2)}.`);
                }
                else {
                    console.log(`**¡¡ Ha perdido su apuesta..!!**`);
                }
                const continuar = readline_sync_1.default.keyInYN([`Desea seguir jugando?`]);
                if (!continuar) {
                    console.log(`Gracias por apostar en ${casinoLasFlores.getNombre()}...!!!`);
                    volver = false;
                }
                break;
            }
            case "SlotLetras": {
                console.log(slotLetras.mostrarReglas());
                slotLetras.sacarProbabilidad();
                const valor = readline_sync_1.default.questionFloat("Ingrese su apuesta:");
                slotLetras.apostar(valor);
                const resultado = slotLetras.validarApuesta(valor);
                console.log(` 
        *******************
            ${resultado}
        *******************`);
                const continuar = readline_sync_1.default.keyInYN([`Desea seguir jugando?`]);
                if (!continuar) {
                    console.log(`Gracias por apostar en ${casinoLasFlores.getNombre()}...!!!`);
                    volver = false;
                }
                break;
            }
            case "SlotNumeros": {
                console.log(slotNumeros.mostrarReglas());
                slotNumeros.sacarProbabilidad();
                const valor = readline_sync_1.default.questionFloat("Ingrese su apuesta:");
                slotNumeros.apostar(valor);
                const resultado = slotNumeros.validarApuesta(valor);
                console.log(` 
        *******************
        ${resultado}
        *******************`);
                const continuar = readline_sync_1.default.keyInYN([`Desea seguir jugando?`]);
                if (!continuar) {
                    console.log(`Gracias por apostar en ${casinoLasFlores.getNombre()}...!!!`);
                    volver = false;
                }
                break;
            }
        }
    }
}
else {
    console.log(`Debe ser mayor de 18 para ingresar a los juegos. Gracias por visitar Casino Pindorchi`);
}
